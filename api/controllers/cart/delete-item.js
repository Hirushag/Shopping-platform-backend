module.exports = {
  friendlyName: "Delete item",

  description: "",

  inputs: {
    item: {
      required: true,
      type: "number",
    },
    uniquekey: {
      required: true,
      type: "string",
    },
  },

  exits: {},

  //delete cart items from cart
  fn: async function (inputs, exits) {
    await CartItems.destroy({ id: inputs.item });

    var inventory = await Inventory.findOne({ id: cart_item.item_id });

    var new_quantity = inventory.quantity + cart_item.quantity;

    await Inventory.update({ id: inventory.id }).set({
      quantity: new_quantity,
    });

    await CartItems.destroy({ id: inputs.item });

    return exits.success({
      status: true,
    });
  },
};
