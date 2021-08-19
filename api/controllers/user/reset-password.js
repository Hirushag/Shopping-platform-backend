module.exports = {


  friendlyName: 'Reset password',


  description: '',


  inputs: {
    id: {
      required: true,
      type: 'number'
    },
    password: {
      required: true,
      type: 'string'
    }
  },


  exits: {
    UserNotFound: {
      responseType: 'HandleError',
    },

    OtherError: {
      responseType: 'HandleError',
    }
  },


  fn: async function (inputs, exits) {

    if (this.req.token.userlevel >= 8) {

      // Look up the user with this id.
      var userRecord = await User.findOne({ id: inputs.id });

      if (!userRecord) {

        return exits.UserNotFound({
          status: false,
          err: 'User not found'
        });
      }

      // update the user with new password
      await User.update({ id: inputs.id })
        .set({
          password: await sails.helpers.passwords.hashPassword(inputs.password)
        }).intercept((err) => {
          // Return a modified error here (or a special exit signal)
          // return err;
          return exits.OtherError({
            status: false,
            err: err.message
          });
        });

      //System Log Record
      await SystemLog.create({
        userid: this.req.token.id,
        info: 'resetted the login password of:' + userRecord.firstname + ' ' + userRecord.lastname + ' [id:' + userRecord.staffcode + ']'
      })

      return exits.success({
        status: true
      });

    } else {
      return exits.OtherError({
        status: false,
        err: 'You dont have permission to perform this action'
      });
    }

  }


};
