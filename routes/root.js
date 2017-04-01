'use strict';
/**
 * Root router
 */

/**
 * Load Module Dependencies.
 */
const Router  = require('koa-router');
const debug   = require('debug')('api:root-router');
const ms      = require('ms');

const pkg    = require('../package.json');
const config = require('../config');

var router  = Router();

router.get('/', function* (next) {
  debug('Access root endpoint');

  this.body = {
    name:       pkg.name,
    version:    pkg.version,
    description: pkg.description,
    documentation: config.DOCS_URL,
    uptime: ms(process.uptime())
  };
});

// Expose Root Rootr
module.exports = router;

