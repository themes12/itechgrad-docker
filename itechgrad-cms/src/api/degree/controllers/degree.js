'use strict';

/**
 * degree controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::degree.degree');
module.exports = createCoreController('api::degree.degree', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { populate, locale, filters } = ctx.query;
        const entity = await strapi.db.query("api::degree.degree").findOne({
                where: { slug: id, locale: locale }, populate: populate
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntity);
    },
  }));
  
  
  