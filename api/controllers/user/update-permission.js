module.exports = {
  friendlyName: "Update permission",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    state: {
      required: true,
      type: "ref",
    },
    user: {
      required: true,
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    if (inputs.state) {
      await UserPermission.create({
        userid: inputs.user,
        perm_id: inputs.id,
        perm_level: 1,
      });
    } else {
      await UserPermission.destroy({ userid: inputs.user, perm_id: inputs.id });
    }
    // All done.
    return exits.success({
      status: true,
    });
  },
};
