module.exports = {
  friendlyName: "Edit sub category",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    name: {
      required: true,
      type: "string",
    },

    category: {
      required: true,
      type: "number",
    },

    uniquekey: {
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
    try {
      //check for duplicate request
      const uniqueRequest = await UniqueReq.create({
        uniquecheck: inputs.uniquekey,
      }).intercept(
        "E_UNIQUE",
        () => "Request already completed. Please Refresh Categories"
      );
    } catch (e) {
      return exits.OtherError({
        status: false,
        err: e.raw,
        e_code: 1,
      });
    }

    const already_exist = await ItemSubCategory.findOne({ id: inputs.id });

    if (!already_exist) {
      return exits.OtherError({
        status: false,
        err: "Sub Category not found",
      });
    }

    var newSubCategory = await ItemSubCategory.update({ id: inputs.id })
      .set({
        name: inputs.name,
        category: inputs.category,
      })
      .intercept("E_UNIQUE", (err) => {
        // return err;
        return exits.OtherError({
          status: false,
          err: "Tax already exists",
        });
      })
      .fetch();

    // All done.
    await SystemLog.create({
      userid: this.req.token.id,
      info: "Edited the sub category:" + newSubCategory.name,
    });

    return exits.success({
      status: true,
      id: newSubCategory.id,
    });
  },
};
