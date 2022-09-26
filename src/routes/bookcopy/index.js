const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const bookCopyRoutes = require('./route')

const bookCopyRouter = express.Router()
const bookCopyRoute = bookCopyRoutes({ bookCopyRouter, makeExpressCallback })

const services = Object.freeze({ bookCopyRoute })

module.exports = { bookCopyRouter, services, bookCopyRoute }