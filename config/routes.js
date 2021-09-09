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

  //delivery
  "GET /delivery/view-all-deliveries": {
    action: "delivery/view-all-deliveries",
  },

  'POST /api/v1/delivery/update-delivery-status': { action: 'delivery/update-delivery-status' },

  //suppliers

  "POST /api/v1/suppliers/add-supplier": { action: "suppliers/add-supplier" },
  "GET /api/v1/suppliers/get-all-suppliers": {
    action: "suppliers/get-all-suppliers",
  },
  "POST /api/v1/suppliers/get-supplier": { action: "suppliers/get-supplier" },
  "POST /api/v1/suppliers/edit-supplier": { action: "suppliers/edit-supplier" },
  "POST /api/v1/suppliers/update-status": { action: "suppliers/update-status" },

  "POST /api/v1/suppliers/delete-supplier": {
    action: "suppliers/delete-supplier",
  },

  //item categories Endpoints
  //get all categories
  "GET /api/v1/itemCategories/get-all-categories": {
    action: "itemCategories/get-all-categories",
  },
  //get categories
  "GET /api/v1/itemCategories/get-category": {
    action: "itemCategories/get-category",
  },
  //add categories
  "POST /api/v1/itemCategories/add-category": {
    action: "itemCategories/add-category",
  },
  //edit categories
  "POST /api/v1/itemCategories/edit-category": {
    action: "itemCategories/edit-category",
  },
  //edit sub categories
  "POST /api/v1/itemCategories/edit-sub-category": {
    action: "itemCategories/edit-sub-category",
  },

  // Sub Category Endpoints
  //add sub categories
  "POST /api/v1/itemCategories/add-sub-category": {
    action: "itemCategories/add-sub-category",
  },
  //edit sub categories
  "POST /api/v1/itemCategories/edi-sub-category": {
    action: "itemCategories/edit-sub-category",
  },
  //get all sub categories
  "POST /api/v1/itemCategories/get-all-sub-categories": {
    action: "itemCategories/get-all-sub-categories",
  },
  //delete sub categories
  "POST /api/v1/itemCategories/delete-sub-categories": {
    action: "itemCategories/delete-sub-categories",
  },
  //update categories- sort order
  "POST /api/v1/itemCategories/update-category-sort-order": {
    action: "itemCategories/update-category-sort-order",
  },

  //supplier
  //get-suppliers-by-category
  "POST /api/v1/inventory/get-suppliers-by-category": {
    action: "inventory/get-suppliers-by-category",
  },
  //get-all-products
  "GET /api/v1/inventory/get-all-products": {
    action: "inventory/get-all-products",
  },

  "POST /api/v1/inventory/create-inventory": {
    action: "inventory/create-inventory",
  },
  "GET /api/v1/inventory/get-inventory": { action: "inventory/get-inventory" },
  "POST /api/v1/inventory/edit-inventory": {
    action: "inventory/edit-inventory",
  },
  "POST /api/v1/inventory/update-product-image": {
    action: "inventory/update-product-image",
  },
  "POST /api/v1/inventory/upload-image": {
    action: "inventory/upload-image",
  },

  "POST /api/v1/inventory/delete-inventory": {
    action: "inventory/delete-inventory",
  },

  "POST /api/v1/inventory/update-image": { action: "inventory/update-image" },

  "POST /api/v1/item-details/get-available-menu-items-by-category": {
    action: "item-details/get-available-menu-items-by-category",
  },

  "POST /api/v1/items/add-to-cart": { action: "items/add-to-cart" },

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝

  //  ╔╦╗╦╔═╗╔═╗
  //  ║║║║╚═╗║
  //  ╩ ╩╩╚═╝╚═╝
};
