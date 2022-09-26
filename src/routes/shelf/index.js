const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const shelfRoutes = require('./route')

const shelfRouter = express.Router()
const shelfRoute = shelfRoutes({ shelfRouter, makeExpressCallback })

const services = Object.freeze({ shelfRoute })

module.exports = { shelfRouter, services, shelfRoute }