/**
 * Mongoose middleware for mongoDB
 */

var mongoose = require('mongoose');
var chalk = require('chalk');

//options
var timeout = 30 * 1000; //30 seconds
var connOpts = {
    server: {
        keepAlive: timeout,
        connectTimeoutMS: timeout
    }
};


//events
var onEvent = function (conn) {
    var dbShort = conn.host + ':' + conn.port + '/' + conn.name;

    //events mongoose.connection or db
    conn.on('error', function (err) {
        console.error(chalk.blue(dbShort, err));
    });

    conn.on('connected', function () {
        console.info(chalk.blue(dbShort, '-connected'));
    });

    conn.on('open', function () {
        console.info(chalk.blue(dbShort, '-connection open'));
    });

    conn.on('reconnected', function () {
        console.info(chalk.blue(dbShort, '-connection reconnected'));
    });

    conn.on('disconnected', function () {
        console.warn(chalk.blue(dbShort, '-connection disconnected'));
    });

    process.on('SIGINT', function () {
        mongoose.disconnect(function () {
            console.log(chalk.blue(dbShort, '-disconnected on app termination by SIGINT'));
            process.exit(0);
        });
    });
};


//make default connection when nodejs app is started (see: server/app/index.js)
module.exports.konektDefault = function (dbConfig) {
    'use strict';

    //establish mongoose connection (use 'mongoose.connection')
    mongoose.connect(dbConfig.uri, connOpts);

    //show events
    onEvent(mongoose.connection);

};


//create connection on demand
module.exports.konekt = function (dbConfig) {
    'use strict';

    //establish mongoose connection (use 'db')
    var db = mongoose.createConnection(dbConfig.uri, connOpts);

    //show events
    onEvent(db);

    return db;
};


//default schema plugins
module.exports.pluginsDefault = function (schema, pluginOpts) {
    //mongoose.plugin(function (schema. pluginOpts) {
    //  schema.add({datum: Date});
    //});
};