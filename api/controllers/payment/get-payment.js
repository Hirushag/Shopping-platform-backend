module.exports = {
  friendlyName: "Get payment",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    // Look up the payment with this id.
    var payment = await Payment.findOne({ id: inputs.id }).populate("user");

    if (!payment) {
      return exits.OtherError({
        status: false,
        err: "Payment not found",
      });
    }

    return exits.success({
      payment: payment,
    });
  },
};
