module.exports = {
  friendlyName: "Edit inventory",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    productcode: {
      required: true,
      type: "string",
    },
    productname: {
      required: true,
      type: "string",
    },
    image: {
      required: false,
      type: "string",
    },
    cat: {
      required: true,
      type: "number",
    },
    supplier: {
      allowNull: true,
      type: "number",
    },
    cost: {
      allowNull: true,
      type: "number",
    },
    sellingprice: {
      allowNull: true,
      type: "number",
    },
    quantity: {
      allowNull: true,
      type: "number",
    },
    sub_cat: {
      type: "number",
      allowNull: true,
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
    if (this.req.token.userlevel >= 8) {
      // Look up the inventory with this id.
      var inventoryRecord = await Inventory.findOne({ id: inputs.id });

      if (!inventoryRecord) {
        return exits.OtherError({
          status: false,
          err: "Inventory not found",
        });
      }

      // update the Inventory
      await Inventory.update({ id: inputs.id })
        .set({
          productname: inputs.productname,
          productcode: inputs.productcode.toUpperCase(),
          image: inputs.image,
          cat: inputs.cat,
          supplier: inputs.supplier,
          cost: inputs.cost,
          sellingprice: inputs.sellingprice,
          quantity: inputs.quantity,
        })
        .intercept("E_UNIQUE", (err) => {
          // Return a modified error here (or a special exit signal)
          // return err;
          return exits.AlreadyExist({
            status: false,
            err: "Product Code already exist",
          });
        });

      //System Log Record
      await SystemLog.create({
        userid: this.req.token.id,
        info:
          "updated the Product  of:" +
          inventoryRecord.productname +
          " [id:" +
          inventoryRecord.id +
          "]",
      });

      return exits.success({
        status: true,
      });
    } else {
      return exits.OtherError({
        status: false,
        err: "You dont have permission to perform this action",
      });
    }
  },
};
