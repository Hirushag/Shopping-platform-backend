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

    return exits.success({
      status: true,
    });
  },
};
