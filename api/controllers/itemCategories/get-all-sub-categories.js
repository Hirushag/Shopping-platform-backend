module.exports = {
  friendlyName: "Get all sub categories",

  description: "",

  inputs: {
    category: {
      allowNull: true,
      type: "number"
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    if (inputs.category != null) {
      var cat_filter = " AND s.category = '" + inputs.category + "'";
    } else {
      var cat_filter = "";
    }
    const subCategories = await sails.sendNativeQuery(
      "select s.*, p.catname as category_name\n" +
        "from item_sub_categories s, item_categories p\n" +
        "where s.category = p.id" +
        cat_filter
    );

    return exits.success(subCategories.rows);
  }
};
