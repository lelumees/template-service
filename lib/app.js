'use strict';

const configuration = require('./configuration');
const router = require('./routes');
const logger = require('koa-logger');
const Koa = require('koa');
const app = new Koa();

app.use(require('koa-jwt')({
    secret: configuration.authorization.secret
}).unless({
    path: [new RegExp(`^${configuration.router.prefix}/health`)]
}));

app.use(logger());
app.use(require('./urls')(router));
app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
