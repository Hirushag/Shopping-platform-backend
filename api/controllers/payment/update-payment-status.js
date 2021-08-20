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

  fn: async function (inputs, exits) {
    //check for duplicate request
    var uniqueRequest = await UniqueReq.create({
      uniquecheck: inputs.uniquekey,
    }).intercept("E_UNIQUE", () => {
      return exits.OtherError({
        status: false,
        err: "Request already completed. Please refresh the page",
      });
    });

    var payment = await Payment.findOne({ id: inputs.id });
    if (!payment) {
      return exits.OtherError({
        status: false,
        err: "Payment Record not found",
      });
    }

    var updatestatus = await Payment.update({ id: inputs.id }).set({
      status: inputs.status,
    });

    return exits.success({
      status: true,
    });
  },
};
