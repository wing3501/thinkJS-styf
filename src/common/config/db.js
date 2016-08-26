'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'thinkjs',
      user: 'root',
      password: 'woshiafei',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};