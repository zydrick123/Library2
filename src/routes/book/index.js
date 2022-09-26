const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const bookRoutes = require('./route')

const bookRouter = express.Router()
const bookRoute = bookRoutes({ bookRouter, makeExpressCallback })

const services = Object.freeze({ bookRoute })

module.exports = { bookRouter, services, bookRoute }