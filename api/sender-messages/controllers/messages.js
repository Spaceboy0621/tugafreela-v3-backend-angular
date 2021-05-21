'use strict';
const messageService = require('comtele-sdk').TextMessageService;
const api_key = '';
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

var textMessageService = new messageService(api_key);

module.exports = {
  async send(ctx) {

    textMessageService.send(
      "tugafreela",
      `TugaFreela: Seu código de validação para o cadastro é ${ctx.request.body.code}`,
      [ctx.request.body.phone],
      (result) => console.log(result)
    )

  }
};
