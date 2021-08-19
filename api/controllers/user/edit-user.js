module.exports = {
  friendlyName: "Edit User",

  description: "",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    firstname: {
      required: true,
      type: "string",
    },
    lastname: {
      required: true,
      type: "string",
    },
    userlevel: {
      required: true,
      type: "number",
    },
  },

  exits: {
    AlreadyExist: {
      responseType: "HandleError",
    },

    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    if (this.req.token.userlevel >= 8) {
      // Look up the user with this id.
      var userRecord = await User.findOne({ id: inputs.id });

      if (!userRecord) {
        return exits.OtherError({
          status: false,
          err: "User not found",
        });
      }

      // update the user
      await User.update({ id: inputs.id })
        .set({
          firstname: inputs.firstname,
          lastname: inputs.lastname,
          userlevel: inputs.userlevel,
        })
        .intercept("E_UNIQUE", (err) => {
          // Return a modified error here (or a special exit signal)
          // return err;
          return exits.AlreadyExist({
            status: false,
            err: "Username already exist",
          });
        });

      return exits.success({
        status: true,
      });
    } else {
      return exits.OtherError({
        status: false,
        err: "You dont have permission to perform this action",
      });
    }
  },
};
