module.exports = {
  friendlyName: "Create user",

  description: "",

  inputs: {
    firstname: {
      required: true,
      type: "string",
    },

    lastname: {
      required: true,
      type: "string",
    },

    username: {
      required: true,
      type: "string",
    },

    password: {
      required: true,
      type: "string",
      maxLength: 200,
    },

    userlevel: {
      type: "number",
    },
  },

  exits: {
    invalid: {
      responseType: "badRequest",
      description:
        "The provided fullName, password and/or username are invalid.",
    },

    usernameAlreadyInUse: {
      statusCode: 409,
      description: "The provided username is already in use.",
    },
  },

  fn: async function (inputs, exits) {
    if (inputs.userlevel == null || inputs.userlevel == "") {
      var new_userlevel = 1;
    } else {
      var new_userlevel = inputs.userlevel;
    }

    var newUserRecord = await User.create({
      firstname: inputs.firstname,
      lastname: inputs.lastname,
      username: inputs.username,
      password: inputs.password,
      userlevel: new_userlevel,
    })
      .intercept("E_UNIQUE", "usernameAlreadyInUse")
      .intercept({ name: "UsageError" }, "invalid")
      .fetch();

    return exits.success({
      status: true,
      user: newUserRecord.id,
    });
  },
};
