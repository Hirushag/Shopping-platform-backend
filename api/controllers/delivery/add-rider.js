module.exports = {
  friendlyName: "Add rider",

  description: "",

  inputs: {
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
    var rider = await Riders.create({
      name: inputs.name.toUpperCase(),
      mobile: inputs.mobile,
      vehicle: inputs.vehicle,
    }).fetch();

    // All done.
    return exits.success({
      status: true,
    });
  },
};
