module.exports = {
  friendlyName: "Get client",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var customet_order = await CustomerOrders.findOne({
      id: inputs.id,
    })
      .populate("user_id")
      .populate("order_id");

    if (!customet_order) {
      return exits.success({
        status: false,
      });
    } else {
      return exits.success(customet_order);
    }
  },
};
