module.exports = {
  friendlyName: "Delivery report",

  description: "",

  inputs: {
    status: {
      type: "number",
      allowNull: true,
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    if (inputs.status == null) {
      var status_filter = "";
    } else {
      var status_filter = "t1.status = '" + inputs.status + "' AND ";
    }

    var delivery_sql =
      "SELECT t1.*,t2.*,t3.* FROM delivery t1 " +
      "INNER JOIN payment t2 on t1.payment_id = t2.id " +
      "INNER JOIN staff t3 on t1.user_id = t3.id " +
      "WHERE " +
      status_filter +
      "TRUE";

    var delivery = await sails.sendNativeQuery(delivery_sql);
    delivery = delivery.rows;

    // All done.
    return exits.success({
      delivery: delivery,
    });
  },
};
