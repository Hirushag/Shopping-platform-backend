module.exports = {


  friendlyName: 'Get all suppliers',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function(inputs, exits) {
    var suppliers = await Suppliers.find()
      .sort("id ASC");

    return exits.success(suppliers);
  }
};
