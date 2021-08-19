module.exports = {
  friendlyName: "Validate logged in",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var id = this.req.token.id;

    var userRecord = await User.findOne({ id: id });
    if (!userRecord) {
      return exits.success({
        status: false,
      });
    } else {
      var version = await Version.find();
      userRecord.version = version;
      return exits.success(userRecord);
    }
  },
};
