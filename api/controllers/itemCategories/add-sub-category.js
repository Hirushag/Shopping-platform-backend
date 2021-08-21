module.exports = {
  friendlyName: "Add sub category",

  description: "",

  inputs: {
    name: {
      required: true,
      type: "string"
    },

    category: {
      required: true,
      type: "number"
    },

    uniquekey: {
      required: true,
      type: "string"
    }
  },

  exits: {
    OtherError: {
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

    //check if subcat exists
    const already_exist = await ItemSubCategory.findOne({ category: inputs.category, name: inputs.name.toUpperCase() });

    if (already_exist) {
      return exits.OtherError({
        status: false,
        err: "Sub Category already exist"
      });
    }

    const newSubCategory = await ItemSubCategory.create({
      name: inputs.name.toUpperCase(),
      category: inputs.category
    }).fetch();

    // System Log Record
    await SystemLog.create({
      userid: this.req.token.id,
      info: "Created the sub category:" + newSubCategory.name
    });

    return exits.success({
      status: true,
      id: newSubCategory.id
    });
  }
};
