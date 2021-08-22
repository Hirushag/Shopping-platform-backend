module.exports = {
  friendlyName: "Delete supplier",

  description: "",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var supplier = await Suppliers.findOne({ id: inputs.id });

    if (!supplier) {
      return exits.OtherError({
        status: false,
        err: "Supplier not found",
      });
    }

    await Suppliers.destroy({ id: inputs.id });
    // All done.
    return exits.success({ status: true });
  },
};
