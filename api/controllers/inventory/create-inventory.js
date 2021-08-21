module.exports = {
  friendlyName: "Create inventory",

  description: "",

  inputs: {
    productcode: {
      required: true,
      type: "string",
    },
    productname: {
      required: true,
      type: "string",
    },
    image: {
      required: false,
      type: "string",
    },
    cat: {
      required: true,
      type: "number",
    },
    supplier: {
      allowNull: true,
      type: "number",
    },
    cost: {
      allowNull: true,
      type: "number",
    },
    sellingprice: {
      allowNull: true,
      type: "number",
    },
    quantity: {
      allowNull: true,
      type: "number",
    },

    sub_cat: {
      allowNull: true,
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
    //check for duplicate request
    var uniqueRequest = await UniqueReq.create({
      uniquecheck: inputs.uniquekey,
    }).intercept("E_UNIQUE", () => {
      return exits.OtherError({
        status: false,
        err: "Request already completed. Please Refresh",
      });
    });

    // Check Product code already exist
    var productCodeExist = await Inventory.findOne({
      productcode: inputs.productcode.toUpperCase(),
    });

    if (productCodeExist) {
      return exits.OtherError({
        status: false,
        err: "Product with this Product code already exist",
      });
    }

    // create inventory record
    var newInventory = await Inventory.create({
      productcode: inputs.productcode.toUpperCase(),
      productname: inputs.productname,
      image: inputs.image,
      cat: inputs.cat,
      supplier: inputs.supplier,
      cost: inputs.cost,
      sellingprice: inputs.sellingprice,
      quantity: inputs.quantity,
      availability: 1,
    }).fetch();

    if (!newInventory) {
      return exits.OtherError({
        status: false,
      });
    } else {
      return exits.success({
        status: true,
        id: newInventory.id,
      });
    }
  },
};
