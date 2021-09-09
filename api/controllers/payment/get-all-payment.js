module.exports = {
  friendlyName: "Get all payment",

  description: "",

  inputs: {},

  exits: {},
  //funtions for get all payments
  fn: async function (inputs, exits) {
    var payments = await Payment.find().populate("user").sort("id ASC");

    //return
    return exits.success({
      payments: payments,
    });
  },
};
