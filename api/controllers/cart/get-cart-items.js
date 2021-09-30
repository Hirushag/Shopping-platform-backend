module.exports = {
  friendlyName: "Get cart items",

  description: "",

  inputs: {},

  exits: {},

  //function for get cart items
  fn: async function (inputs, exits) {
    var cart = await Cart.findOne({ user: this.req.token.id, status: 0 });

    //quary for view cart items
    var cart_items =
      "select t2.id,t2.name,t2.quantity,t2.price , t1.user,t1.status,t2.cart_id from cart t1 " +
      "INNER JOIN cart_items t2 ON t1.id = t2.cart_id " +
      "WHERE t1.user = '" +
      this.req.token.id +
      "'AND t1.status = 0 ";

    var item = await sails.sendNativeQuery(cart_items);
    item = item.rows;
    return exits.success({ item: item, cart: cart });
  },
};
