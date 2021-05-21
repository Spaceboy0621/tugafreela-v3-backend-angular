'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async myProposals(ctx) {
        const { user } = ctx.params;
        
        return await strapi.query('proposal').find({ freelancer: user });
        
    },

    async getByJob(ctx) {
        const { job } = ctx.request.body;

        return await strapi.query('proposal').find({job: job});
    }

};
