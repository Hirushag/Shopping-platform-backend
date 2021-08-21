module.exports = {
  friendlyName: "Get ptype",

  description: "",

  inputs: {},

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    var rawaMterialSQL =
      "select t1.id, t1.productcode, t1.productname, t1.image, t2.id AS sub_cat,t3.id as cat_id, t3.catname, t2.name from inventory t1 " +
      "INNER JOIN item_sub_categories t2 ON t1.cat = t2.id " +
      "INNER JOIN item_categories t3 ON t2.category = t3.id " +
      "WHERE t1.p_type = 'RAW MATERIALS'";

    var rawmaterials = await sails.sendNativeQuery(rawaMterialSQL);
    rawmaterials = rawmaterials.rows;

    var finalGoodSQL =
      "select t1.id, t1.productcode, t1.productname, t1.itemtype, t1.p_type, t1.image, t1.barcode, t2.id AS sub_cat,t3.id as cat_id, t3.catname, t2.name from inventory t1 " +
      "INNER JOIN item_sub_categories t2 ON t1.cat = t2.id " +
      "INNER JOIN item_categories t3 ON t2.category = t3.id " +
      "WHERE t1.p_type = 'FINAL GOODS'";

    var finalgoods = await sails.sendNativeQuery(finalGoodSQL);
    finalgoods = finalgoods.rows;

    var packingMaterialSQL =
      "select t1.id, t1.productcode, t1.productname, t1.itemtype, t1.p_type, t1.image, t1.barcode, t2.id AS sub_cat,t3.id as cat_id, t3.catname, t2.name from inventory t1 " +
      "INNER JOIN item_sub_categories t2 ON t1.cat = t2.id " +
      "INNER JOIN item_categories t3 ON t2.category = t3.id " +
      "WHERE t1.p_type = 'PACKING MATERIALS'";

    var packingmaterials = await sails.sendNativeQuery(packingMaterialSQL);
    packingmaterials = packingmaterials.rows;

    var ServicesSQL =
      "select t1.id, t1.productcode, t1.productname, t1.itemtype, t1.p_type, t1.image, t1.barcode, t2.id AS sub_cat,t3.id as cat_id, t3.catname, t2.name from inventory t1 " +
      "INNER JOIN item_sub_categories t2 ON t1.cat = t2.id " +
      "INNER JOIN item_categories t3 ON t2.category = t3.id " +
      "WHERE t1.p_type = 'SERVICES'";

    var services = await sails.sendNativeQuery(ServicesSQL);
    services = services.rows;

    return exits.success({
      rawmaterials: rawmaterials,
      finalgoods: finalgoods,
      packingmaterials: packingmaterials,
      services: services,
    });
  },
};
