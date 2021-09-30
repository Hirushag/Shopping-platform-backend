module.exports = {
  friendlyName: "Payment report",

  description: "",

  inputs: {
    method: {
      type: "string",
      allowNull: true,
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    if (inputs.method == null) {
      var method_filter = "";
    } else {
      var method_filter = "t1.method = '" + inputs.method + "' AND ";
    }

    var payments_sql =
      "SELECT t1.*,t2.* FROM payment t1 " +
      "INNER JOIN staff t2 on t1.user = t2.id " +
      "WHERE " +
      method_filter +
      "TRUE";

    var payment = await sails.sendNativeQuery(payments_sql);
    payment = payment.rows;

    var payments_total_sql =
      "SELECT sum(t1.amount) as total_amount FROM payment t1 " +
      "INNER JOIN staff t2 on t1.user = t2.id " +
      "WHERE " +
      method_filter +
      "TRUE";

    var payment_total = await sails.sendNativeQuery(payments_total_sql);
    payment_total = payment_total.rows;

    // All done.
    return exits.success({
      payment: payment,
      payment_total: payment_total,
    });
  },
};
