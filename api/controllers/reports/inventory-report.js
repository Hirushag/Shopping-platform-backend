module.exports = {
  friendlyName: "Inventory report",

  description: "",

  inputs: {
    supplier: {
      type: "number",
      allowNull: true,
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    if (inputs.supplier == null) {
      var supplier_filter = "";
    } else {
      var supplier_filter = "t1.supplier = '" + inputs.supplier + "' AND ";
    }
    var inventory_sql =
      "SELECT t1.*,t2.*,t3.* FROM inventory t1 " +
      "INNER JOIN suppliers t2 on t1.supplier = t2.id " +
      "INNER JOIN item_categories t3 on t1.cat = t3.id " +
      "WHERE " +
      supplier_filter +
      "TRUE";

    var inventory = await sails.sendNativeQuery(inventory_sql);
    inventory = inventory.rows;

    var inventory_cost_sql =
      "SELECT t1.*,t2.*,t3.*,sum(t1.cost) as total_cost FROM inventory t1 " +
      "INNER JOIN suppliers t2 on t1.supplier = t2.id " +
      "INNER JOIN item_categories t3 on t1.cat = t3.id " +
      "WHERE " +
      supplier_filter +
      "TRUE";

    var inventory_cost = await sails.sendNativeQuery(inventory_cost_sql);
    inventory_cost = inventory_cost.rows;

    // All done.
    return exits.success({
      inventory: inventory,
      inventory_cost: inventory_cost,
    });
  },
};
