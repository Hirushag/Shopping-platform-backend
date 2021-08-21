module.exports = {


  friendlyName: 'Get all categories',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var itemCategories = await ItemCategories.find().sort('sort_order Asc');

    return exits.success(itemCategories);

  }


};
