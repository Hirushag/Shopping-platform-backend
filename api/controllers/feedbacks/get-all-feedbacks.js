module.exports = {
  friendlyName: "Get all feedbacks",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    var feedback = await Feedback.find().populate("user");

    // All done.
    return exits.success(feedback);
  },
};
