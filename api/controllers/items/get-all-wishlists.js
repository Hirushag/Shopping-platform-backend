module.exports = {
  friendlyName: "Get all wishlists",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var wishlist = await Wishlist.find({ user: this.req.token.id }).populate(
      "item"
    );

    // All done.
    return exits.success(wishlist);
  },
};
