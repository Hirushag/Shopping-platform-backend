module.exports = {
  friendlyName: "Delete rider",

  description: "",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    await Riders.destroy({ id: inputs.id });

    // All done.
    return exits.success({ status: true });
  },
};
