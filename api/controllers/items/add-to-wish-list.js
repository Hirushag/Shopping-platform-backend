module.exports = {
  friendlyName: "Add to wish list",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    var find_wishlist = await Wishlist.findOne({
      user: this.req.token.id,
      item: inputs.id,
    });

    if (find_wishlist) {
      return exits.success({
        status: false,
      });
    } else {
      var add_new = await Wishlist.create({
        item: inputs.id,
        user: this.req.token.id,
      });
      return exits.success({ status: true });
    }
    // All done.
  },
};
