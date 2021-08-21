module.exports = {


  friendlyName: 'Get supplier',


  description: '',


  inputs: {

    id: {
      required: true,
      type: "number"
    }

  },


  exits: {

  },


  fn: async function(inputs, exits) {
    var supplier = await Suppliers.findOne({ id: inputs.id }).populate("created_by");

    if (!supplier) {
      return exits.success({
        status: false
      });
    } else {
      return exits.success(supplier);
    }
  }
};
