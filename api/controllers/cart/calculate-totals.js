const { find } = require("async");

module.exports = {
  friendlyName: "Calculate totals",

  description: "",

  inputs: {},

  exits: {},

  //cart total calculation
  fn: async function (inputs, exits) {
    //sql quary for calculate cart total
    var cart =
      "SELECT sum(t1.price) as nettotal FROM cart_items t1 inner join cart t2 on t2.id = t1.cart_id " +
      " where t2.user = '" +
      this.req.token.id +
      " 'AND t2.status = '0' " +
      " ";

    var cart_list = await sails.sendNativeQuery(cart);
    cart_list = cart_list.rows[0];

    var subtotal = cart_list;

    //return sub total
    return exits.success(subtotal);
  },
};
