module.exports = {


  friendlyName: 'Add feedback',


  description: '',


  inputs: {
    feedback: {
      type: "string",
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var feedback = await Feedback.create({
      feedback: inputs.feedback,
      user: this.req.token.id,
    }).fetch();

    await SystemLog.create({
      userid: this.req.token.id,
      info: "Feedback Added" + feedback.id,
    });
    // All done.
    return exits.success({
      status: true,
    });
  },
};

