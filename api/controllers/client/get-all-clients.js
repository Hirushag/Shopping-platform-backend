module.exports = {
  friendlyName: "Get all clients",

  description: "",

  inputs: {},

  exits: {},

  fn: async function(inputs, exits) {
    var clients = await Client.find({ status: { ">": 0 } })
    .sort("id ASC");

    return exits.success(clients);
  }
};
