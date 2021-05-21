'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async search() {
		return await strapi.query('category').find();
	},

	async findOne(ctx) {
		const { id } = ctx.params;

		strapi.log.debug('CAT', ctx)
		
		return await strapi.query('category').find({id});
	}
};
