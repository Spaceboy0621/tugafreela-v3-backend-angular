'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async notificationNotRead(ctx) {
        const { user } = ctx.params;
        return await strapi.services.notification.find({
            "read": false,
            "user": user
        });
    },

    async updateStatusRead(ctx) {
        const { id } = ctx.params;
        return await strapi.query('notification').update(
            { id },
            { read: true }
        )
    }
};
