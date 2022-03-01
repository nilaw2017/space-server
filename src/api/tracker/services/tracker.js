'use strict';

/**
 * tracker service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tracker.tracker');
