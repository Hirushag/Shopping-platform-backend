module.exports = {


  friendlyName: 'Delete feedbacks',


  description: '',


  inputs: {
    id: {
      type: "number",
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    await Feedback.destroy({ id: inputs.id });

    await SystemLog.create({
      userid: this.req.token.id,
      info: "Feedback Deleted" + inputs.id,
    });

    // All done.
    return exits.success({ status: true });
  },
};
