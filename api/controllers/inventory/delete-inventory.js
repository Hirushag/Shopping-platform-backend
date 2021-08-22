module.exports = {
  friendlyName: "Delete inventory",

  description: "",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var inventory = await Inventory.findOne({ id: inputs.id });

    if (!inventory) {
      return exits.OtherError({
        status: false,
        err: "Inventory not found",
      });
    }

    await Inventory.destroy({ id: inputs.id });

    // All done.
    return exits.success({ status: true });
  },
};
