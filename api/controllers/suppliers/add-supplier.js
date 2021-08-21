module.exports = {
  friendlyName: "Add supplier",

  description: "",

  inputs: {
    supplier_name: {
      required: true,
      type: "string",
    },
    phone: {
      required: true,
      type: "string",
    },
    address: {
      required: true,
      type: "string",
    },
    category: {
      required: true,
      type: "number",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    var already_exist = await Suppliers.findOne({
      supplier_name: inputs.supplier_name,
    });

    if (already_exist) {
      return exits.OtherError({
        status: false,
        err: "Supplier already exist. " + already_exist.suppliercode,
        id: already_exist.id,
      });
    }

    var supplier = await Suppliers.create({
      supplier_name: inputs.supplier_name.toUpperCase(),
      phone: inputs.phone,
      company_address: inputs.address,
      category: inputs.category,
      status: 1,
      created_by: this.req.token.id,
    }).fetch();

    var generatedid = supplier.id;
    generatedid = "SUP-" + generatedid;

    await Suppliers.update(
      { id: supplier.id },
      {
        suppliercode: generatedid,
      }
    );

    // System Log record
    await SystemLog.create({
      userid: this.req.token.id,
      info: "Created a Supplier:" + supplier.code,
    });
    // All done.
    return exits.success({ status: true, id: supplier.id });
  },
};
