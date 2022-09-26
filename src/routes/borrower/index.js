const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const borrowerRoutes = require('./route')

const borrowerRouter = express.Router()
const borrowerRoute = borrowerRoutes({ borrowerRouter, makeExpressCallback })

const services = Object.freeze({ borrowerRoute })

module.exports = { borrowerRouter, services, borrowerRoute }