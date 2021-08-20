module.exports = {
  friendlyName: "Add delivery details",

  description: "",

  inputs: {
    payment_method: {
      required: true,
      type: "string",
    },
    amount: {
      allowNull: true,
      type: "string",
    },

    name: {
      allowNull: true,
      type: "string",
    },
    number: {
      allowNull: true,
      type: "string",
    },
    address1: {
      allowNull: true,
      type: "string",
    },
    address2: {
      allowNull: true,
      type: "string",
    },
    city: {
      allowNull: true,
      type: "string",
    },

    email: {
      allowNull: true,
      type: "string",
    },
    account_name: {
      allowNull: true,
      type: "string",
    },
    card_number: {
      allowNull: true,
      type: "number",
    },
    month: {
      allowNull: true,
      type: "string",
    },
    year: {
      allowNull: true,
      type: "number",
    },
    cvv: {
      allowNull: true,
      type: "number",
    },
    account_email: {
      allowNull: true,
      type: "string",
    },
    contact: {
      allowNull: true,
      type: "string",
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    console.log(inputs.payment_method);

    if (inputs.payment_method == "CASH ON DELIVERY") {
      var payments = await Payment.create({
        method: inputs.payment_method,
        user: this.req.token.id,
        amount: inputs.amount,
        status: 0,
      }).fetch();

      var delivery = await Delivery.create({
        user_id: payments.user,
        payment_id: payments.id,
        name: inputs.name,
        number: inputs.number,
        address1: inputs.address1,
        address2: inputs.address2,
        city: inputs.city,
        email: inputs.email,
        status: 0,
      }).fetch();
    } else {
      var payments = await Payment.create({
        method: inputs.payment_method,
        user: this.req.token.id,
        amount: inputs.amount,
        status: 0,
      }).fetch();

      var delivery = await Delivery.create({
        user_id: payments.user,
        payment_id: payments.id,
        name: inputs.name,
        number: inputs.number,
        address1: inputs.address1,
        address2: inputs.address2,
        city: inputs.city,
        email: inputs.email,
        status: 0,
      }).fetch();

      var card = await CardDetails.create({
        user_id: this.req.token.id,
        account_name: inputs.account_name,
        card_number: inputs.card_number,
        month: inputs.month,
        year: inputs.year,
        cvv: inputs.cvv,
        email: inputs.account_email,
        contact: inputs.contact,
        payment_id: payments.id,
      }).fetch();
    }

    var updatestatus = await Cart.update({
      user: this.req.token.id,
      status: 0,
    }).set({
      status: 1,
    });

    //  var send_email = await sails.helpers.sendEmails(delivery.id);

    // All done.
    return exits.success({
      status: true,
    });
  },
};
