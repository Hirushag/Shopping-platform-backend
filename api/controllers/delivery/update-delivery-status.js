module.exports = {
  friendlyName: "Update delivery status",

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
    rider: {
      allowNull: true,
      type: "number",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    var delivery = await Delivery.findOne({ id: inputs.id });
    if (!delivery) {
      return exits.OtherError({
        status: false,
        err: "Delivery Record not found",
      });
    }
    var updatestatus = await Delivery.update({ id: inputs.id }).set({
      status: inputs.status,
      rider: inputs.rider,
    });

    await SystemLog.create({
      userid: this.req.token.id,
      info: "Delivery Status Updated" + inputs.id,
    });

    return exits.success({
      status: true,
    });
  },
};
