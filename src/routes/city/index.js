const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const cityRoutes = require('./route')

const cityRouter = express.Router()
const cityRoute = cityRoutes({ cityRouter, makeExpressCallback })

const services = Object.freeze({ cityRoute })

module.exports = { cityRouter, services, cityRoute }