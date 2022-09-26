const express = require('express');
const makeExpressCallback = require('../../express-callback/index')

const readerRoutes = require('./route')

const readerRouter = express.Router();
const readerRoute = readerRoutes({ readerRouter, makeExpressCallback })

const services = Object.freeze({ readerRoute })
module.exports = {
    readerRouter, readerRoute, services
}