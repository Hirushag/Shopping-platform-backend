module.exports = {
  friendlyName: "Get all user roles",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var userroles = await UserRole.find().sort("id ASC");

    return exits.success(userroles);
  },
};
