module.exports = {
  friendlyName: "Send Emails",

  description: "",

  description: "",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
  },

  exits: {
    OtherError: {
      responseType: "HandleError",
    },
  },

  fn: async function (inputs, exits) {
    var delivery = await Delivery.findOne({ id: inputs.id });

    try {
      cont = true;
      if (cont) {
        var company_name = "Easy Shop";
        var company_logo = "assets/img/logo.jpg";
        var company_address = "Easy Shop , Malabe";
        var company_email = "Easyshop@gmail.com";
        var company_phone = "011 2 256 32658";
        var heading = "Your Order Confirmed !";
        var name = delivery.name;
        var body =
          "This Email Was Send By " +
          company_name +
          " To Notify You That Your Order has Confirmed !   ";

        var content2 = "Thank You";

        var header_bg_color = "#66BB7F";

        var footer_1_bg_color = "#66BB7F";

        var footer_2_bg_color = "#C0EDE0";

        // html body
        var email_template =
          `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                  <html
                    style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"
                  >
                    <head>
                      <meta charset="UTF-8" />
                      <meta content="width=device-width, initial-scale=1" name="viewport" />
                      <meta name="x-apple-disable-message-reformatting" />
                      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                      <meta content="telephone=no" name="format-detection" />
                      <title>New Template</title>
                      <!--[if (mso 16)
                        ]><style type="text/css">
                          a {
                            text-decoration: none;
                          }
                        </style><!
                      [endif]-->
                      <!--[if gte mso 9
                        ]><style>
                          sup {
                            font-size: 100% !important;
                          }
                        </style><!
                      [endif]-->
                      <!--[if !mso]><!-- -->
                      <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet" />
                      <!--<![endif]-->
                      <style type="text/css">
                        @media only screen and (max-width: 600px) {
                          p,
                          ul li,
                          ol li,
                          a {
                            font-size: 16px !important;
                            line-height: 150% !important;
                          }
                          h1 {
                            font-size: 30px !important;
                            text-align: center;
                            line-height: 120% !important;
                          }
                          h2 {
                            font-size: 26px !important;
                            text-align: center;
                            line-height: 120% !important;
                          }
                          h3 {
                            font-size: 20px !important;
                            text-align: center;
                            line-height: 120% !important;
                          }
                          h1 a {
                            font-size: 30px !important;
                          }
                          h2 a {
                            font-size: 26px !important;
                          }
                          h3 a {
                            font-size: 20px !important;
                          }
                          .es-menu td a {
                            font-size: 16px !important;
                          }
                          .es-header-body p,
                          .es-header-body ul li,
                          .es-header-body ol li,
                          .es-header-body a {
                            font-size: 16px !important;
                          }
                          .es-footer-body p,
                          .es-footer-body ul li,
                          .es-footer-body ol li,
                          .es-footer-body a {
                            font-size: 16px !important;
                          }
                          .es-infoblock p,
                          .es-infoblock ul li,
                          .es-infoblock ol li,
                          .es-infoblock a {
                            font-size: 12px !important;
                          }
                          *[class="gmail-fix"] {
                            display: none !important;
                          }
                          .es-m-txt-c,
                          .es-m-txt-c h1,
                          .es-m-txt-c h2,
                          .es-m-txt-c h3 {
                            text-align: center !important;
                          }
                          .es-m-txt-r,
                          .es-m-txt-r h1,
                          .es-m-txt-r h2,
                          .es-m-txt-r h3 {
                            text-align: right !important;
                          }
                          .es-m-txt-l,
                          .es-m-txt-l h1,
                          .es-m-txt-l h2,
                          .es-m-txt-l h3 {
                            text-align: left !important;
                          }
                          .es-m-txt-r img,
                          .es-m-txt-c img,
                          .es-m-txt-l img {
                            display: inline !important;
                          }
                          .es-button-border {
                            display: block !important;
                          }
                          a.es-button {
                            font-size: 20px !important;
                            display: block !important;
                            border-width: 15px 25px 15px 25px !important;
                          }
                          .es-btn-fw {
                            border-width: 10px 0px !important;
                            text-align: center !important;
                          }
                          .es-adaptive table,
                          .es-btn-fw,
                          .es-btn-fw-brdr,
                          .es-left,
                          .es-right {
                            width: 100% !important;
                          }
                          .es-content table,
                          .es-header table,
                          .es-footer table,
                          .es-content,
                          .es-footer,
                          .es-header {
                            width: 100% !important;
                            max-width: 600px !important;
                          }
                          .es-adapt-td {
                            display: block !important;
                            width: 100% !important;
                          }
                          .adapt-img {
                            width: 100% !important;
                            height: auto !important;
                          }
                          .es-m-p0 {
                            padding: 0px !important;
                          }
                          .es-m-p0r {
                            padding-right: 0px !important;
                          }
                          .es-m-p0l {
                            padding-left: 0px !important;
                          }
                          .es-m-p0t {
                            padding-top: 0px !important;
                          }
                          .es-m-p0b {
                            padding-bottom: 0 !important;
                          }
                          .es-m-p20b {
                            padding-bottom: 20px !important;
                          }
                          .es-mobile-hidden,
                          .es-hidden {
                            display: none !important;
                          }
                          .es-desk-hidden {
                            display: table-row !important;
                            width: auto !important;
                            overflow: visible !important;
                            float: none !important;
                            max-height: inherit !important;
                            line-height: inherit !important;
                          }
                          .es-desk-menu-hidden {
                            display: table-cell !important;
                          }
                          table.es-table-not-adapt,
                          .esd-block-html table {
                            width: auto !important;
                          }
                          table.es-social {
                            display: inline-block !important;
                          }
                          table.es-social td {
                            display: inline-block !important;
                          }
                        }
                        #outlook a {
                          padding: 0;
                        }
                        .ExternalClass {
                          width: 100%;
                        }
                        .ExternalClass,
                        .ExternalClass p,
                        .ExternalClass span,
                        .ExternalClass font,
                        .ExternalClass td,
                        .ExternalClass div {
                          line-height: 100%;
                        }
                        .es-button {
                          mso-style-priority: 100 !important;
                          text-decoration: none !important;
                        }
                        a[x-apple-data-detectors] {
                          color: inherit !important;
                          text-decoration: none !important;
                          font-size: inherit !important;
                          font-family: inherit !important;
                          font-weight: inherit !important;
                          line-height: inherit !important;
                        }
                        .es-desk-hidden {
                          display: none;
                          float: left;
                          overflow: hidden;
                          width: 0;
                          max-height: 0;
                          line-height: 0;
                          mso-hide: all;
                        }
                      </style>
                    </head>
                    <body
                      style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;"
                    >
                      <div class="es-wrapper-color" style="background-color:#F4F4F4;">
                        <!--[if gte mso 9
                          ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                            <v:fill type="tile" color=#F4F4F4 ></v:fill> </v:background
                        ><![endif]-->
                        <table
                          class="es-wrapper"
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;"
                        >
                          <tr class="gmail-fix" height="0" style="border-collapse:collapse;">
                            <td style="padding:0;Margin:0;">
                              <table
                                width="600"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                align="center"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                              >
                                <tr style="border-collapse:collapse;">
                                  <td
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                    style="padding:0;Margin:0;line-height:1px;min-width:600px;"
                                    height="0"
                                  >
                                    <img
                                      src="https://esputnik.com/repository/applications/images/blank.gif"
                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px;"
                                      alt
                                      width="600"
                                      height="1"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                          <tr style="border-collapse:collapse;">
                            <td valign="top" style="padding:0;Margin:0;">
                              <table
                                class="es-header"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:` +
          header_bg_color +
          `;background-repeat:repeat;background-position:center top;"
                              >
                                <tr style="border-collapse:collapse;">
                                  <td align="center" style="padding:0;Margin:0;">
                                    <table
                                      class="es-header-body"
                                      width="600"
                                      cellspacing="0"
                                      cellpadding="0"
                                      align="center"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:` +
          header_bg_color +
          `;"
                                    >
                                      <tr style="border-collapse:collapse;">
                                        <td
                                          align="left"
                                          style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px;"
                                        >
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                                          >
                                            <tr style="border-collapse:collapse;">
                                              <td width="580" valign="top" align="center" style="padding:0;Margin:0;">
                                                <table
                                                  width="100%"
                                                  cellspacing="0"
                                                  cellpadding="0"
                                                  role="presentation"
                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                                                >
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      align="center"
                                                      style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px;font-size:0;"
                                                    >
                                                      <img
                                                        src="` +
          company_logo +
          `"
                                                        alt
                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"
                                                        width="200"
                                                      />
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                  
                              <table
                                class="es-content"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"
                              >
                                <tr style="border-collapse:collapse;">
                                  <td style="padding:0;Margin:0;background-color:` +
          header_bg_color +
          `;" bgcolor="` +
          header_bg_color +
          `" align="center">
                                    <table
                                      class="es-content-body"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"
                                      width="600"
                                      cellspacing="0"
                                      cellpadding="0"
                                      align="center"
                                    >
                                      <tr style="border-collapse:collapse;">
                                        <td align="left" style="padding:0;Margin:0;">
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                                          >
                                            <tr style="border-collapse:collapse;">
                                              <td width="600" valign="top" align="center" style="padding:0;Margin:0;">
                                                <table
                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px;"
                                                  width="100%"
                                                  cellspacing="0"
                                                  cellpadding="0"
                                                  bgcolor="#ffffff"
                                                  role="presentation"
                                                >
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      align="center"
                                                      style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px;"
                                                    >
                                                      <h4
                                                        style="Margin:0;line-height:38px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:26px;font-style:normal;font-weight:normal;color:#111111;"
                                                      >
                                                      ` +
          heading +
          `
                                                      </h4>
                                                    </td>
                                                  </tr>
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      bgcolor="#ffffff"
                                                      align="center"
                                                      style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0;"
                                                    >
                                                      <table
                                                        width="100%"
                                                        height="100%"
                                                        cellspacing="0"
                                                        cellpadding="0"
                                                        border="0"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                                                      >
                                                        <tr style="border-collapse:collapse;">
                                                          <td
                                                            style="padding:0;Margin:0px;border-bottom:1px solid #FFFFFF;background:rgba(0, 0, 0, 0) none repeat scroll 0% 0%;height:1px;width:100%;margin:0px;"
                                                          ></td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                  
                              <table
                                class="es-content"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"
                              >
                                <tr style="border-collapse:collapse;">
                                  <td align="center" style="padding:0;Margin:0;">
                                    <table
                                      class="es-content-body"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"
                                      width="600"
                                      cellspacing="0"
                                      cellpadding="0"
                                      bgcolor="#ffffff"
                                      align="center"
                                    >
                                      <tr style="border-collapse:collapse;">
                                        <td align="left" style="padding:0;Margin:0;">
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                                          >
                                            <tr style="border-collapse:collapse;">
                                              <td width="600" valign="top" align="center" style="padding:0;Margin:0;">
                                                <table
                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"
                                                  width="100%"
                                                  cellspacing="0"
                                                  cellpadding="0"
                                                  bgcolor="#ffffff"
                                                  role="presentation"
                                                >
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      class="es-m-txt-l"
                                                      bgcolor="#ffffff"
                                                      align="left"
                                                      style="Margin:0;padding-bottom:15px;padding-top:20px;padding-left:30px;padding-right:30px;"
                                                    >
                                                      <p
                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;"
                                                      >
                                                      Dear 
                                                      ` +
          name +
          `, <br><br><br>` +
          body +
          ` 
                                                     </center></h3> </p>
                                                    </td>
                                                  </tr>
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      class="es-m-txt-l"
                                                      bgcolor="#ffffff"
                                                      align="left"
                                                      style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px;"
                                                    >
                                                      <p
                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;"
                                                      >
                                                        
                                                      </p>
                                                    </td>
                                                  </tr>
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      class="es-m-txt-l"
                                                      bgcolor="#ffffff"
                                                      align="left"
                                                      style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px;"
                                                    >
                                                      <p
                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;"
                                                      >
                                                        ` +
          content2 +
          `
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                  
                              <table
                                class="es-content"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"
                              >
                                <tr style="border-collapse:collapse;">
                                  <td align="center" style="padding:0;Margin:0;">
                                    <table
                                      class="es-content-body"
                                      width="600"
                                      cellspacing="0"
                                      cellpadding="0"
                                      bgcolor="#ffffff"
                                      align="center"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"
                                    >
                                      <tr style="border-collapse:collapse;">
                                        <td align="left" style="padding:0;Margin:0;">
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                                          >
                                            <tr style="border-collapse:collapse;">
                                              <td width="600" valign="top" align="center" style="padding:0;Margin:0;">
                                                <table
                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:` +
          footer_1_bg_color +
          `;"
                                                  width="100%"
                                                  cellspacing="0"
                                                  cellpadding="0"
                                                  bgcolor="` +
          footer_1_bg_color +
          `"
                                                  role="presentation"
                                                >
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      class="es-m-txt-l"
                                                      align="left"
                                                      style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;"
                                                    >
                                                      <p
                                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#ffffff;"
                                                      >
                                                        <br /><span style="font-size:20px;"
                                                          ><strong>` +
          company_name +
          `<br /></strong></span
                                                        ><br />` +
          company_address +
          `
                                                        <br />` +
          company_phone +
          `<br /><br /><br />
                                                      </p>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                  
                              <table
                                class="es-content"
                                cellspacing="0"
                                cellpadding="0"
                                align="center"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"
                              >
                                <tr style="border-collapse:collapse;">
                                  <td align="center" style="padding:0;Margin:0;">
                                    <table
                                      class="es-content-body"
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"
                                      width="600"
                                      cellspacing="0"
                                      cellpadding="0"
                                      align="center"
                                    >
                                      <tr style="border-collapse:collapse;">
                                        <td align="left" style="padding:0;Margin:0;">
                                          <table
                                            width="100%"
                                            cellspacing="0"
                                            cellpadding="0"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"
                                          >
                                            <tr style="border-collapse:collapse;">
                                              <td width="600" valign="top" align="center" style="padding:0;Margin:0;">
                                                <table
                                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:` +
          footer_2_bg_color +
          `;border-radius:4px;"
                                                  width="100%"
                                                  cellspacing="0"
                                                  cellpadding="0"
                                                  bgcolor="` +
          footer_2_bg_color +
          `"
                                                  role="presentation"
                                                >
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      align="center"
                                                      style="padding:0;Margin:0;padding-top:30px;padding-left:30px;padding-right:30px;"
                                                    >
                                                      <h3
                                                        style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#111111;"
                                                      >
                                                        Need more help?
                                                      </h3>
                                                    </td>
                                                  </tr>
                                                  <tr style="border-collapse:collapse;">
                                                    <td
                                                      esdev-links-color="#66bb7f"
                                                      align="center"
                                                      style="padding:0;Margin:0;padding-bottom:30px;padding-left:30px;padding-right:30px;"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="` +
          company_email +
          `"
                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;text-decoration:underline;color:#66BB7F;"
                                                        >We’re here, ready to talk</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </body>
                  </html>
                  `;
        var text_tempalte =
          "Invoice Generated from " +
          company_name +
          ". Please find the attached invoice below.";

        // var cc_email_array = [];
        // if (patient.cc_emails != null) {
        //   cc_email_array = inputs.cc_emails.split(",");
        // }
        // var bcc_email_array = [];
        // if (inputs.bcc_emails != null) {
        //   bcc_email_array = inputs.bcc_emails.split(",");
        // }

        if (delivery.email != null) {
          var email_state = await sails.helpers.sendEmail.with({
            to_email: delivery.email,
            subject: "Order Confirmed ! ",
            template: email_template,
            text_tempalte: " ",
            cc_emails: [],
            bcc_emails: [],
          });

          if (email_state.status) {
            console.log("asfasg");
            const fs = require("fs");
            return exits.success({
              status: true,
            });
          } else {
            return exits.OtherError({
              status: false,
              err: "Failed to send email. Please check client email",
            });
          }
        } else {
          return exits.OtherError({
            status: false,
            err: "Client email is not available",
          });
        }
      }
    } catch (e) {
      console.log("ERROR : " + e);
      return exits.OtherError({
        status: false,
        err: "Failed to send email",
      });
    }
  },
};
