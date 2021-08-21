module.exports = {


  friendlyName: 'Get category',


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


    var categoryRecord = await ItemCategories.findOne({ id: inputs.id });
    if (!categoryRecord) {
      return exits.success({
        status: false
      });
    } else {
      return exits.success(categoryRecord);
    }

  }


};
