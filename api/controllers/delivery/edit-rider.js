module.exports = {
  friendlyName: "Edit rider",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    name: {
      required: true,
      type: "string",
    },
    mobile: {
      required: true,
      type: "string",
    },
    vehicle: {
      required: false,
      type: "string",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    await Riders.update({
      id: inputs.id,
    }).set({
      name: inputs.name.toUpperCase(),
      mobile: inputs.mobile,
      vehicle: inputs.vehicle,
    });

    // All done.
    return exits.success({
      status: true,
    });
  },
};
