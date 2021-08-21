module.exports = {
  friendlyName: "Get available menu items by category",

  description: "",

  inputs: {
    category: {
      allowNull: true,
      type: "number",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    if (inputs.category == null) {
      var sql =
        "SELECT   t1.id, t1.productcode ,t1.productname,t3.catname,t1.sellingprice,t1.image FROM inventory t1  " +
        "inner join item_categories t3 on t1.cat = t3.id " +
        " where t1.availability = 1 " +
        " ";
    } else {
      var sql =
        "SELECT   t1.id , t1.productcode ,t1.productname , t3.catname, t1.sellingprice,t1.image FROM inventory t1 " +
        "inner join item_categories t3 on t1.cat = t3.id " +
        " where t1.cat = '" +
        inputs.category +
        "'and t1.availability = 1" +
        " ";
    }

    var items = await sails.sendNativeQuery(sql);
    items = items.rows;

    return exits.success(items);
  },
};
