const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const bookSubCatRoutes = require('./route')

const bookSubCatRouter = express.Router()
const bookSubCatRoute = bookSubCatRoutes({ bookSubCatRouter, makeExpressCallback })

const services = Object.freeze({ bookSubCatRoute })

module.exports = { bookSubCatRouter, services, bookSubCatRoute }