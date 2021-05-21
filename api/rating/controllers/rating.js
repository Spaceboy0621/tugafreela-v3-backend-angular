'use strict';

const { default: createStrapi } = require("strapi");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    
    async getFeedback(ctx) {
        const {user} = ctx.params;

         return await strapi.query('rating').find({
             user
         })
    }
};
