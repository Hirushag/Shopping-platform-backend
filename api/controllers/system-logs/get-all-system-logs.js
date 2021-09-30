module.exports = {
  friendlyName: "Get all system logs",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var system_logs = await SystemLog.find().populate("userid");

    // All done.
    return exits.success(system_logs);
  },
};
