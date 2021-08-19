module.exports = {
  friendlyName: "Generate user permission",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var userRecord = await User.findOne({ id: inputs.id }).populate(
      "perm_list"
    );
    if (!userRecord) {
      return exits.success({
        status: false,
        err: "User not found",
      });
    } else {
      if (this.req.token.userlevel >= 20) {
        //delete previous records
        await UserPermission.destroy({ userid: inputs.id });

        //generate new records
        var default_permission = await PermissionGroup.find({
          role_id: userRecord.userlevel,
        });

        for (perm of default_permission) {
          await UserPermission.create({
            userid: inputs.id,
            perm_id: perm.perm_id,
            perm_level: perm.default_perm,
          });
        }

        // System Log record
        await SystemLog.create({
          userid: this.req.token.id,
          info: "Re-generated Permissions for User: " + userRecord.id,
        });

        return exits.success({
          status: true,
        });
      } else {
        return exits.success({
          status: false,
          err: "You dont have permission for this action",
        });
      }
    }
  },
};
