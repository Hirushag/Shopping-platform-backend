module.exports = {
  friendlyName: "Get all riders",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var riders = await Riders.find();

    // All done.
    return exits.success(riders);
  },
};
