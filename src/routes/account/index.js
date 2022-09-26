const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const accountRoutes = require('./route')

const accountRouter = express.Router()
const accountRoute = accountRoutes({ accountRouter, makeExpressCallback })

const services = Object.freeze({ accountRoute })

module.exports = { accountRouter, services, accountRoute }