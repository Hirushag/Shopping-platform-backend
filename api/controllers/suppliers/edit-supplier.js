module.exports = {


  friendlyName: 'Edit supplier',


  description: '',


  inputs: {

    id: {
      required: true,
      type: "number",
    },
    supplier_name: {
      required: true,
      type: "string",
    },
    phone: {
      allowNull: true,
      type: "string",
    },
    address: {
      allowNull: true,
      type: "string",
    },

  },


  exits: {
    AlreadyExist: {
      responseType: "HandleError",
    },

    OtherError: {
      responseType: "HandleError",
    },

  },


  fn: async function (inputs, exits) {
    // Look up the vehicle with this id.
    var supplier = await Suppliers.findOne({ id: inputs.id });

    if (!supplier) {
      return exits.OtherError({
        status: false,
        err: "Supplier not found",
      });
    }

    // update the user
    await Suppliers.update({ id: inputs.id })
      .set({
        supplier_name: inputs.supplier_name,
        phone: inputs.phone,
        company_address: inputs.address,
      })
      .intercept("E_UNIQUE", (err) => {
        // Return a modified error here (or a special exit signal)
        // return err;
        return exits.AlreadyExist({
          status: false,
          err: "Supplier already exist",
        });
      });

    //System Log Record
    await SystemLog.create({
      userid: this.req.token.id,
      info:
        "updated the Supplier :" +
        supplier.suppliercode +
        " [id:" +
        supplier.id +
        "]",
    });

    return exits.success({
      status: true,
    });
  },
};
