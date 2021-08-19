module.exports = {
  friendlyName: "Edit client",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    clientname: {
      required: true,
      type: "string",
    },
    phone: {
      allowNull: true,
      type: "string",
    },
  },

  exits: {
    AlreadyExist: {
      responseType: "HandleError",
    },

    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    // Look up the vehicle with this id.
    var client = await Client.findOne({ id: inputs.id });

    if (!client) {
      return exits.OtherError({
        status: false,
        err: "Customer not found",
      });
    }

    // update the user
    await Client.update({ id: inputs.id })
      .set({
        clientname: inputs.clientname,
        phone: inputs.phone,
      })
      .intercept("E_UNIQUE", (err) => {
        // Return a modified error here (or a special exit signal)
        // return err;
        return exits.AlreadyExist({
          status: false,
          err: "Customer already exist",
        });
      });

    //System Log Record
    await SystemLog.create({
      userid: this.req.token.id,
      info:
        "updated the Customer :" +
        client.clientcode +
        " [id:" +
        client.id +
        "]",
    });

    return exits.success({
      status: true,
    });
  },
};
