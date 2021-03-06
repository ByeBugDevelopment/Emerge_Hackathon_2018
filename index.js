'use strict';

const Path = require('path');
const Dotenv = require('dotenv');
const Hapi = require('hapi');

Dotenv.config({ silent: true });

const Config = require('./config');
const Routes = require('./lib/routes');

const server = new Hapi.Server(Config.server);

module.exports = async function () {

    await server.register(Config.plugins);

    server.route(Routes(server));
    return server;
};
