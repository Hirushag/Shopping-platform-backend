module.exports = {
  friendlyName: "Update payment status",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    status: {
      required: true,
      type: "number",
    },
    uniquekey: {
      required: true,
      type: "string",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },
  //function for update payment
  fn: async function (inputs, exits) {
    //check for duplicate payment request
    var uniqueRequest = await UniqueReq.create({
      uniquecheck: inputs.uniquekey,
    }).intercept("E_UNIQUE", () => {
      return exits.OtherError({
        status: false,
        err: "Request already completed. Please refresh the page",
      });
    });

    //get single payemnet by id
    var payment = await Payment.findOne({ id: inputs.id });
    if (!payment) {
      return exits.OtherError({
        status: false,
        err: "Payment Record not found",
      });
    }
    //update payement status
    var updatestatus = await Payment.update({ id: inputs.id }).set({
      status: inputs.status,
    });

    //return
    return exits.success({
      status: true,
    });
  },
};
