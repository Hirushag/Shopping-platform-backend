/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": {},

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  "POST /api/v1/user/create-user": { action: "user/create-user" },
  "POST /api/v1/user/edit-user": { action: "user/edit-user" },
  "GET /api/v1/user/get-all-users": { action: "user/find-all-users" },
  "POST /api/v1/user/login": { action: "user/login" },
  "POST /api/v1/user/reset-password": { action: "user/reset-password" },
  "GET /api/v1/user/validate-logged-in": { action: "user/validate-logged-in" },
  "GET /api/v1/user/get-user": { action: "user/get-user" },
  "POST /api/v1/user/create-user-role": { action: "user/create-user-role" },
  "POST /api/v1/user/generate-all-users-permission": {
    action: "user/generate-all-users-permission",
  },
  "POST /api/v1/user/generate-user-permission": {
    action: "user/generate-user-permission",
  },
  "GET /api/v1/user/get-all-user-roles": { action: "user/get-all-user-roles" },
  "GET /api/v1/user/get-permissions-by-user": {
    action: "user/get-permissions-by-user",
  },
  "POST /api/v1/user/update-permission-group": {
    action: "user/update-permission-group",
  },
  "GET /api/v1/user/get-permissions-by-user-role": {
    action: "user/get-permissions-by-user-role",
  },
  "POST /api/v1/user/update-permission": { action: "user/update-permission" },
  "POST /api/v1/user/update-user-role-permission": {
    action: "user/update-user-role-permission",
  },
  "GET /api/v1/user/get-permission-groups-by-userlevel": {
    action: "user/get-permission-groups-by-userlevel",
  },
  "POST /api/v1/user/update-permission-groups": {
    action: "user/update-permission-groups",
  },

  // client endpoints
  "POST /api/v1/client/add-client": { action: "client/add-client" },
  "GET /api/v1/client/get-client": { action: "client/get-client" },
  "GET /api/v1/client/get-all-clients": { action: "client/get-all-clients" },
  "POST /api/v1/client/edit-client": { action: "client/edit-client" },

  //Payments
  "GET /api/v1/payment/get-all-payment": { action: "payment/get-all-payment" },
  "GET /api/v1/payment/get-payment": { action: "payment/get-payment" },
  "POST /api/v1/payment/update-payment-status": {
    action: "payment/update-payment-status",
  },

  //cart

  "POST /api/v1/items/add-to-cart": { action: "items/add-to-cart" },

  "GET /api/v1/cart/get-cart-items": { action: "cart/get-cart-items" },

  "POST /api/v1/cart/update-quantity": { action: "cart/update-quantity" },
  "POST /api/v1/cart/delete-item": { action: "cart/delete-item" },

  "GET /api/v1/cart/calculate-totals": { action: "cart/calculate-totals" },

  "POST /api/v1/cart/add-delivery-details": {
    action: "cart/add-delivery-details",
  },
  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝

  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝
};
