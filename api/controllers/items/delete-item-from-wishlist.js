module.exports = {
  friendlyName: "Delete item from wishlist",

  description: "",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    await Wishlist.destroy({ id: inputs.id });
    // All done.
    return exits.success({ status: true });
  },
};
