module.exports = {
  friendlyName: "Create user role",

  description: "",

  inputs: {
    rolename: {
      required: true,
      type: "string",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    var user_role = await UserRole.create({
      rolename: inputs.rolename.toUpperCase(),
    })
      .intercept("E_UNIQUE", (err) => {
        // return err;
        return exits.OtherError({
          status: false,
          err: "User Role Name Already exists",
        });
      })
      .fetch();

    //delete previous records
    await PermissionGroup.destroy({ role_id: user_role.id });

    //generate new records
    var default_permission = await PermissionSettings.find({});

    for (perm of default_permission) {
      await PermissionGroup.create({
        perm_id: perm.id,
        role_id: user_role.id,
      });
    }

    // System Log record
    await SystemLog.create({
      userid: this.req.token.id,
      info: "Created User Role:" + user_role.rolename,
    });

    // System Log record
    await SystemLog.create({
      userid: this.req.token.id,
      info:
        "User Role Permissions Has Been Generated For: " + user_role.rolename,
    });

    return exits.success({
      status: true,
    });
  },
};
