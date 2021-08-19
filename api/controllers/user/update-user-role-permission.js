module.exports = {
  friendlyName: "Update user role permission",

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
    role_id: {
      required: true,
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    if (inputs.state) {
      await PermissionGroup.create({
        role_id: inputs.role_id,
        perm_id: inputs.id,
        perm_level: 1,
      });
    } else {
      await PermissionGroup.destroy({
        role_id: inputs.role_id,
        perm_id: inputs.id,
      });
    }
    var user_role = await UserRole.findOne({ id: inputs.role_id });

    var users = await User.find({ userlevel: inputs.role_id });

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
          await UserPermission.destroyOne({
            id: perm_exist.id,
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
