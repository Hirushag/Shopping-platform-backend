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
  //function for get payment by id
  fn: async function (inputs, exits) {
    var payment = await Payment.findOne({ id: inputs.id }).populate("user");

    //errors heandling
    if (!payment) {
      return exits.OtherError({
        status: false,
        err: "Payment not found",
      });
    }

    //return
    return exits.success({
      payment: payment,
    });
  },
};
