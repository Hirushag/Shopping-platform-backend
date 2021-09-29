module.exports = {
  friendlyName: "Update order status",

  description: "",

  inputs: {
    id: {
      type: "number",
    },
    order_id: {
      type: "number",
    },
    status: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var customer_order = await CustomerOrders.findOne({ id: inputs.id });

    if (customer_order) {
      await CustomerOrders.update({ id: inputs.id }).set({
        status: inputs.status,
      });
    }

    if (inputs.status == -4) {
      await Delivery.update({ id: inputs.order_id }).set({ status: -4 });
    } else {
      await Delivery.update({ id: inputs.order_id }).set({ status: 0 });
    }

    // All done.
    return exits.success({ status: true });
  },
};
