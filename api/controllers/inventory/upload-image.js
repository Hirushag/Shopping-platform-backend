module.exports = {
  friendlyName: "Upload picture",

  description: "",

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    this.req.file("files").upload(function (err, filesUploaded) {
      if (err) return res.serverError(err);
      return exits.success({
        fileinfo: filesUploaded,
        status: true,
      });
    });
  },
};
