const express = require('express');
const makeExpressCallback = require('../../express-callback/index')

const requestRoutes = require('./route')

const requestRouter = express.Router();
const requestRoute = requestRoutes({ requestRouter, makeExpressCallback })

const services = Object.freeze({ requestRoute })
module.exports = {
    requestRouter, requestRoute, services
}