module.exports = {
  friendlyName: "Update profile picture",

  description: "",

  inputs: {
    id: {
      required: true,
      type: "number",
    },
    imageArray: {
      required: true,
      type: "ref",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    // Look up the user with this id.
    var product = await Inventory.findOne({ id: inputs.id });

    if (!product) {
      return exits.OtherError({
        status: false,
        err: "Inventory not found",
      });
    }

    var filename = inputs.imageArray[0].fd.split("/").pop();

    // update the Product
    var updatedProduct = await Inventory.update({ id: inputs.id })
      .set({
        image: filename,
      })
      .fetch();

    // System Log Record
    await SystemLog.create({
      userid: this.req.token.id,
      info: "updated the Product Image of:" + updatedProduct[0].productcode,
    });

    return exits.success({
      status: true,
    });
  },
};
