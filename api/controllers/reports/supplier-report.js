module.exports = {
  friendlyName: "Supplier report",

  description: "",

  inputs: {
    category: {
      type: "string",
      allowNull: true,
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    if (inputs.category == null) {
      var category_filter = "";
    } else {
      var category_filter = "t1.category = '" + inputs.category + "' AND ";
    }

    var supplier_sql =
      "SELECT t1.*,t2.*,t3.* FROM suppliers t1 " +
      "INNER JOIN staff t2 on t1.created_by = t2.id " +
      "INNER JOIN item_categories t3 on t1.category = t3.id " +
      "WHERE " +
      category_filter +
      "TRUE";

    var supplier = await sails.sendNativeQuery(supplier_sql);
    supplier = supplier.rows;

    // All done.
    return exits.success({
      supplier: supplier,
    });
  },
};
