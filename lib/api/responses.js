'use strict';

module.exports = {
    success(context, data) {
        context.body = data;
        context.status = data ? 200 : 204;
    }
};
