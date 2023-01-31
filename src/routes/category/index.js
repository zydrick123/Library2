const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const categoryRoutes = require('./route')

const categoryRouter = express.Router()
const categoryRoute = categoryRoutes({ categoryRouter, makeExpressCallback })

const services = Object.freeze({ categoryRoute })

module.exports = { categoryRouter, services, categoryRoute }