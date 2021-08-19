module.exports = {
  friendlyName: "Update permission groups",

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
    userlevel: {
      required: true,
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    if (inputs.state) {
      await PermissionGroup.create({
        perm_id: inputs.id,
        role_id: inputs.userlevel,
      });
    } else {
      await PermissionGroup.destroy({
        role_id: inputs.userlevel,
        perm_id: inputs.id,
      });
    }

    var users = await User.find({ userlevel: inputs.userlevel });

    for (let user of users) {
      // check permission exist
      var perm_exist = await UserPermission.findOne({
        userid: user.id,
        perm_id: inputs.id,
      });
      if (inputs.state) {
        if (!perm_exist) {
          await UserPermission.create({
            userid: user.id,
            perm_id: inputs.id,
            perm_level: 1,
          });
        }
      } else {
        if (perm_exist) {
          await UserPermission.destroy({
            userid: user.id,
            perm_id: inputs.id,
          });
        }
      }
    }

    // All done.
    return exits.success({
      status: true,
    });
  },
};
