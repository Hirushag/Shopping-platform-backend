module.exports = {
  friendlyName: "Get all payment",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var payments = await Payment.find().populate("user").sort("id ASC");

    return exits.success({
      payments: payments,
    });
  },
};
