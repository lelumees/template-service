'use strict';

const _ = require('lodash');

module.exports = {
    port: _.get(process.env, 'PORT', 3000),
    router: {
        prefix: '/api'
    },
    authorization: {
        secret: _.get(process.env, 'AUTH_SECRET')
    }
};
