module.exports = {
  friendlyName: "Get suppliers by category",

  description: "",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var categoryRecord = await ItemCategories.findOne({ id: inputs.id });

    if (!categoryRecord) {
      return exits.success({
        status: false,
      });
    } else {
      var suppliers = await Suppliers.find({ category: categoryRecord.id });

      return exits.success(suppliers);
    }
  },
};
