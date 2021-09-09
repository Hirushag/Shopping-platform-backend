module.exports = {
  friendlyName: "Update quantity",

  description: "",

  inputs: {
    item: {
      required: true,
      type: "number",
    },
    quantity: {
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

  //function for manage quantity
  fn: async function (inputs, exits) {
    console.log(inputs.item);
    var finditem = await CartItems.findOne({ id: inputs.item });

    var new_quantity = finditem.quantity + inputs.quantity;

    var new_price = (finditem.price / finditem.quantity) * new_quantity;

    var updateqty = await CartItems.update({ id: inputs.item })
      .set({
        quantity: new_quantity,
        price: new_price,
      })
      .fetch();

    //return
    return exits.success({
      status: true,
    });
  },
};
