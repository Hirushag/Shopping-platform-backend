module.exports = {
  friendlyName: "Edit category",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    catname: {
      required: true,
      type: "string",
    },

    catcode: {
      allowNull: true,
      type: "string",
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
        () => "Request already completed. Please Refresh Categories!!"
      );
    } catch (e) {
      return exits.OtherError({
        status: false,
        err: e.raw,
        e_code: 1,
      });
    }

    var category = await ItemCategories.findOne({ id: inputs.id });

    // Checks whether the category already exists
    if (!category) {
      return exits.AlreadyExist({
        status: false,
        err: "Category not found",
      });
    }

    var newCategory = await ItemCategories.update({ id: inputs.id })
      .set({
        catname: inputs.catname,
        catcode: inputs.catcode,
      })
      .intercept("E_UNIQUE", (err) => {
        // return err;
        return exits.OtherError({
          status: false,
          err: "Category already exists",
        });
      })
      .fetch();

    // System Log Record
    await SystemLog.create({
      userid: this.req.token.id,
      info: "Edited the category:" + newCategory.catname,
    });

    return exits.success({
      status: true,
    });
  },
};
