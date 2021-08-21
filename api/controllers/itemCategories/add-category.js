module.exports = {
  friendlyName: "Add category",

  description: "",

  inputs: {
    catname: {
      required: true,
      type: "string"
    },

    catcode: {
      allowNull: true,
      type: "string"
    },

    uniquekey: {
      required: true,
      type: "string"
    }
  },

  exits: {
    OtherError: {
      responseType: "HandleError"
    },

    AlreadyExist: {
      responseType: "HandleError"
    }
  },

  fn: async function(inputs, exits) {
    try {
      //check for duplicate request
      const uniqueRequest = await UniqueReq.create({
        uniquecheck: inputs.uniquekey
      }).intercept("E_UNIQUE", () => "Request already completed. Please Refresh Categories");
    } catch (e) {
      return exits.OtherError({
        status: false,
        err: e.raw,
        e_code: 1
      });
    }

    const category = await ItemCategories.findOne({ catname: inputs.catname.toUpperCase() });

    // Checks whether the category already exists
    if (category) {
      return exits.AlreadyExist({
        status: false,
        err: "Category already exists"
      });
    }

    const newCategory = await ItemCategories.create({
      catname: inputs.catname.toUpperCase(),
      catcode: inputs.catname.toUpperCase()
    }).fetch();

    // System Log Record
    await SystemLog.create({
      userid: this.req.token.id,
      info: "Created the category:" + newCategory.catname
    });

    return exits.success({
      status: true,
      id: newCategory.id
    });
  }
};
