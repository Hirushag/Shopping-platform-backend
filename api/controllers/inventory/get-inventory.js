module.exports = {
  friendlyName: "Get inventory",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var inventory = await Inventory.findOne({ id: inputs.id })
      .populate("cat")
      .populate("supplier");

    var sub_category = await ItemSubCategory.findOne({
      category: inventory.cat.id,
    });

    if (sub_category) {
      inventory.cat.subcat = sub_category.name;
      inventory.cat.subcatid = sub_category.id;
    }

    return exits.success(inventory);
  },
};
