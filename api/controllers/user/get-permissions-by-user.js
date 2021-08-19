module.exports = {
  friendlyName: "Get permissions by user",

  description: "",

  inputs: {
    id: {
      requred: true,
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs, exits) {
    var all_permissions = await PermissionSettings.find();
    var category_list = [];
    for (let permission of all_permissions) {
      var user_permission = await UserPermission.findOne({
        userid: inputs.id,
        perm_id: permission.id,
      });
      if (user_permission) {
        permission.status = true;
      } else {
        permission.status = false;
      }
      if (!category_list.includes(permission.perm_category)) {
        category_list.push(permission.perm_category);
      }
    }

    return exits.success({
      permissions: all_permissions,
      categories: category_list,
    });
  },
};
