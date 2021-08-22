module.exports = {
  friendlyName: "Update image",

  description: "",

  inputs: {
    blob: { type: "string" },

    id: { type: "number" },
  },

  exits: {},

  fn: async function (inputs, exits) {
    console.log(inputs.blob);
    var invetory = await Inventory.findOne({ id: inputs.id });

    await Inventory.update({ id: inputs.id }).set({ image: inputs.blob });
    // All done.
    return exits.success({ status: true });
  },
};
