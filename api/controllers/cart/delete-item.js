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

  fn: async function (inputs, exits) {
    await CartItems.destroy({ id: inputs.item });

    return exits.success({
      status: true,
    });
  },
};
