'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

	async search(ctx) {
        const filters = ctx.request.body;
        strapi.log.debug('User Search', "Pesquisando usuários....");
		return await strapi.query('user', 'users-permissions').find(
			{
				"name_contains": filters.name,
				"categories": filters.categories
			}
        );
    },

    async findOne(ctx) {
        const { id } = ctx.params;

        return await strapi.query('user', 'users-permissions').findOne({ id });
    },
    
    async update(ctx) {
        strapi.log.debug('User Update', ctx.request.body);
        const editedUser = ctx.request.body;

        return await strapi.query('user', 'users-permissions').update(
            {id: editedUser.id},
            editedUser
        );
    },

    async create(ctx) {

    },

    async findAll(ctx) {
        return await strapi.query('user', 'users-permissions').find();
    },

    async delete(ctx) {
        strapi.log.debug('User Delete', ctx);
    },

    returnEmailTemplate() {

        return {
            subject: 'Account confirmation',
            text: '',
            html: `<p>Thank you for registering!</p>

            <p>You have to confirm your email address. Please click on the link below.</p>
            
            <p><%= URL %>?confirmation=<%= CODE %></p>
            
            <p>Thanks.</p>`
        }
    }
};
