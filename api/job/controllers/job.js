'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async create(ctx) {
        const jobForm = ctx.request.body;
        const skillsFilter = jobForm.skills.map(s => s.id);

        const job = await strapi.services.job.create(jobForm);

        const usersNotify = await strapi.query('user', 'users-permissions').find({
            "type": "Freelancer",
            "level": skillsFilter.level_experience,
            "skills": skillsFilter
        });

        usersNotify.forEach(user => {
            this.createNotification(user, job);
        });

        return job;
    },

    async createNotification(user, job) {
        const message = `Olá, um novo projeto compátivel com o seu perfil foi criado.`;
        const notification = await strapi.services.notification.create({text: message, user: user, job: job});
        return notification;
    },

    async myJobs(ctx) {
        const { user } = ctx.params;
        const { type } = ctx.params;
        if(type === 'Cliente')
            return await strapi.services.job.find({ "owner": user })
        else 
            return await strapi.services.job.find({ "freelancer": user })
    },

    async search(ctx) {
		const filters = ctx.request.body;
		return await strapi.services.job.find(
			{
				"categories": filters.categories
			}
		);
    },
    
    async getByStatus(ctx) {
		const { status } = ctx.params;
		return await strapi.services.job.find(
			{
				"status": status
			}
		);
    },
    
    async getByName(ctx) {
		const { name } = ctx.params;
		return await strapi.services.job.find(
			{
				"name": {_contains: { name } }
			}
		);
    },
    
    async getByOwner(ctx) {
		const { owner } = ctx.params;
		return await strapi.services.job.find(
			{
                "owner": {_contains: {owner}}
			}
		);
	}
};
