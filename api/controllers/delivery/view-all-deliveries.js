module.exports = {


  friendlyName: 'View all deliveries',


  description: 'Display "All deliveries" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/delivery/all-deliveries'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
