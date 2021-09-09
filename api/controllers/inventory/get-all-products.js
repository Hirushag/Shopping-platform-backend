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

    return exits.success(inventory);
  },
};
