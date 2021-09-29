module.exports = {


  friendlyName: 'Get delivery',


  description: '',


  inputs: {
    id: {
      type: "number",
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var delivery = await Delivery.findOne({ id: inputs.id })
      .populate("user_id")
      .populate("rider");
    // All done.
    return exits.success(delivery);
  },
};
