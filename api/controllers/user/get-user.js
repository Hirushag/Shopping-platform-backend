module.exports = {


  friendlyName: 'Get user',


  description: '',


  inputs: {
    id: {
      required: true,
      type: 'number'
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var userRecord = await User.findOne({ id: inputs.id });
    if (!userRecord) {
      return exits.success({
        status: false
      });
    } else {
      return exits.success(userRecord);
    }

  }


};
