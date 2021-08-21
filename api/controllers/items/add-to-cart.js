module.exports = {
  friendlyName: "Add to cart",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    name: {
      allowNull: true,
      type: "string",
    },
    price: {
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
    var find_cart = await Cart.findOne({
      user: this.req.token.id,
      status: 0,
    });

    if (!find_cart) {
      var cart = await Cart.create({
        user: this.req.token.id,
      }).fetch();

      var cartt = cart.id;
    } else {
      var cartt = find_cart.id;
    }

    var cart_items = await CartItems.create({
      item_id: inputs.id,
      cart_id: cartt,
      name: inputs.name,
      quantity: 1,
      price: inputs.price,
    }).fetch();

    console.log(cart);

    return exits.success({
      status: true,
      id: cart_items.cart_id,
    });
  },
};
