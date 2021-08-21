module.exports = {


  friendlyName: 'Update status',


  description: '',


  inputs: {
    id: {
      required: true,
      type: "number",
    },
    status: {
      required: true,
      type: "number",
    },

  },


  exits: {

    OtherError: {
      responseType: "HandleError",
    },

  },


  fn: async function (inputs,exits) {

    var supplier = await Suppliers.findOne({ id: inputs.id });
    if (!supplier) {
      return exits.OtherError({
        status: false,
        err: "Supplier Record not found",
      });
    }

    var updatestatus = await Suppliers.update({ id: inputs.id }).set({
      status: inputs.status,
    });

    return exits.success({
      status: true,
    });
  },
};
