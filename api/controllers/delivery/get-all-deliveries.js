module.exports = {
  friendlyName: "Get all deliveries",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var deliveries = await Delivery.find()
      .populate("user_id")
      .populate("rider");

    // Respond with view.
    return exits.success(deliveries);
  },
};
