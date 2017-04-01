'use strict';

/**
 * Load Module Dependencies
 */
const Router = require('koa-router');
const debug  = require('debug')('api:app-router');

const rootRouter          = require('./root');

var appRouter = new Router();

const OPEN_ENDPOINTS = [
    '/'
];

// Open Endpoints/Requires Authentication
appRouter.OPEN_ENDPOINTS = OPEN_ENDPOINTS;

// Add Root Router
composeRoute('', rootRouter);
//Add stream Router
composeRoute('stream', rootRouter);
//Add credits Router
composeRoute('record', rootRouter);

function composeRoute(endpoint, router){
  appRouter.use(`/${endpoint}`, router.routes(), router.allowedMethods());
}
// Export App Router
module.exports = appRouter;
