module.exports = {
  friendlyName: "Get all clients",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var customet_orders = await CustomerOrders.find()
      .populate("user_id")
      .sort("id ASC");

    return exits.success(customet_orders);
  },
};
