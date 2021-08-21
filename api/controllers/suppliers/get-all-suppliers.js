module.exports = {
  friendlyName: "Get all suppliers",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var suppliers = await Suppliers.find().populate("category").sort("id ASC");

    return exits.success(suppliers);
  },
};
