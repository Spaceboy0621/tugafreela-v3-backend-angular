'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async updateStatusRead(ctx) {

        const { id } = ctx.params;

        return await strapi.query('chat-messages').update(
            { id },
            {
                read_at: new Date()
            }
        )
    }
};
