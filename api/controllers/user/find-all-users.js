module.exports = {
  friendlyName: "Find all users",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    // Get all user accounts except rootadmin login
    var users = await User.find({
      userlevel: { ">": 1 },
    });

    var customers = await User.find({
      userlevel: 1,
    });

    return exits.success({ users: users, customers: customers });
  },
};
