const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const issued_BookRoutes = require('./route')

const issued_BookRouter = express.Router()
const issued_BookRoute = issued_BookRoutes({ issued_BookRouter, makeExpressCallback })

const services = Object.freeze({ issued_BookRoute })

module.exports = { issued_BookRouter, services, issued_BookRoute }