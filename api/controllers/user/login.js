module.exports = {
  friendlyName: "Login",

  description: "Login user.",

  inputs: {
    username: {
      required: true,
      type: "string",
    },

    password: {
      required: true,
      type: "string",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    // Look up by the username.
    var userRecord = await User.findOne({
      username: inputs.username,
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if (!userRecord) {
      return exits.OtherError({
        status: false,
        err: "Provided Username or Password Invalid!",
      });
    }

    // Generate Token if password match
    var tokenIssued = await sails.helpers.jwTokenIssue({
      id: userRecord.id,
      userlevel: userRecord.userlevel,
    });
    //this.req.session.userId = userRecord.id;

    // Send success response (this is where the session actually gets persisted)
    return exits.success({
      status: true,
      body: {
        id: userRecord.id,
        username: userRecord.username,
        firstName: userRecord.firstname,
        lastName: userRecord.lastname,
        token: tokenIssued,
      },
    });
  },
};
