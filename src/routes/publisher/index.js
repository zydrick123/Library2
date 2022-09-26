const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const publisherRoutes = require('./route')

const publisherRouter = express.Router()
const publisherRoute = publisherRoutes({ publisherRouter, makeExpressCallback })

const services = Object.freeze({ publisherRoute })

module.exports = { publisherRouter, services, publisherRoute }