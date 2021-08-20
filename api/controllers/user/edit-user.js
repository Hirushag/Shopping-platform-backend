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
    username: {
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

      if(inputs.userlevel == 2){
        var userLevel = 1
      }else if(inputs.userlevel == 1){
        var userLevel = 10
      }

      // update the user
      await User.update({ id: inputs.id })
        .set({
          firstname: inputs.firstname,
          lastname: inputs.lastname,
          username:inputs.username,
          userlevel: userLevel,
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
