module.exports = {


  friendlyName: 'Edit feedback',


  description: '',


  inputs: {
    id: { type: "number" },
    feedback: { type: "string" },

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    await Feedback.update({ id: inputs.id }).set({
      feedback: inputs.feedback,
    });

    var feedback = await Feedback.findOne({ id: inputs.id });

    await SystemLog.create({
      userid: this.req.token.id,
      info: "Feedback Edited" + feedback.id,
    });

    // All done.
    return exits.success({ status: true });
  },
};
