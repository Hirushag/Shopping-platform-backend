module.exports = {
  friendlyName: "Get all products",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var inventory = await Inventory.find().populate("cat").populate("supplier");

    for (let item of inventory) {
      var sub_category = await ItemSubCategory.findOne({
        category: item.cat.id,
      });

      if (sub_category) {
        item.cat.subcat = sub_category.name;
        item.cat.subcatid = sub_category.id;
      }
    }

    // var item_sql =
    //   "select t1.id, t1.productcode, t4.supplier_name,t4.suppliercode, t1.productname, t1.image,t2.id AS sub_cat,t3.id as cat_id, t3.catname, t2.name from inventory t1 " +
    //   "INNER JOIN item_sub_categories t2 ON t1.cat = t2.id " +
    //   "INNER JOIN item_categories t3 ON t2.category = t3.id " +
    //   "INNER JOIN suppliers t4 ON t1.supplier = t4.id ";

    // var item = await sails.sendNativeQuery(item_sql);

    return exits.success(inventory);
  },
};
