module.exports = {
  friendlyName: "Add client",

  description: "",

  inputs: {
    clientname: {
      required: true,
      type: "string",
    },
    phone: {
      allowNull: true,
      type: "string",
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
        err: "Request already completed.",
        id: null,
      });
    });

    var already_exist = await Client.findOne({ phone: inputs.phone });

    if (already_exist) {
      return exits.OtherError({
        status: false,
        err: "Customer already exist. " + already_exist.clientcode,
        id: already_exist.id,
      });
    }

    var client = await Client.create({
      clientname: inputs.clientname.toUpperCase(),
      phone: inputs.phone,
      status: 1,
    }).fetch();

    // generate unique id and update record
    var generatedid = client.id;
    generatedid = "EZ-" + generatedid;

    await Client.update(
      { id: client.id },
      {
        clientcode: generatedid,
      }
    );

    // System Log record
    await SystemLog.create({
      userid: this.req.token.id,
      info: "Created a Client:" + client.clientcode,
    });

    return exits.success({
      status: true,
      id: client.id,
    });
  },
};
