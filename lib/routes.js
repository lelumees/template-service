'use strict';

const configuration = require('./configuration');
const Router = require('koa-router');
const router = new Router();

router.prefix(configuration.router.prefix);

router.get('health', '/health', require('./api/health'));
router.get('/', require('./api/discovery'));

module.exports = router;
