'use strict';

/**
 * Load Module Dependencies
 */
const debug = require('debug')('api:errorHandler-middleware');

module.exports = function errorHandler() {
  return function* (next) {
    try {
      yield next;

    } catch (err) {
      let status = err.status || 500;

      if(err.message.indexOf('Cast to ObjectId failed') !== -1) {
        err.message = 'Please provide a valid resource ID';
      }

      let message = {
        error: {
          status: status,
          message: err.message,
          type: err.type
        }
      };

      this.status = status;
      this.body = message;
      this.app.emit('error', err, this);

    }
  };
};
