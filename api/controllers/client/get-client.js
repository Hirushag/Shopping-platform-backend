module.exports = {
  friendlyName: "Get client",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number"
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    var client = await Client.findOne({ id: inputs.id });

    if (!client) {
      return exits.success({
        status: false
      });
    } else {
      return exits.success(client);
    }
  }
};
