const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const authorRoutes = require('./route')

const authorRouter = express.Router()
const authorRoute = authorRoutes({ authorRouter, makeExpressCallback })

const services = Object.freeze({ authorRoute })

module.exports = { authorRouter, services, authorRoute }