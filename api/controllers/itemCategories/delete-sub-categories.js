module.exports = {
  friendlyName: "Delete sub categories",

  description: "",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {},
  //delete sub category
  fn: async function (inputs, exits) {
    var cat = await ItemSubCategory.findOne({ id: inputs.id });

    if (!cat) {
      return exits.OtherError({
        status: false,
        err: "Sub Category not found",
      });
    }

    await ItemSubCategory.destroy({ id: inputs.id });
    // All done.
    return exits.success({ status: true });
  },
};
