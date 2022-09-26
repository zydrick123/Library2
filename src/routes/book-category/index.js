const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const bookCatRoutes = require('./route')

const bookCatRouter = express.Router()
const bookCatRoute = bookCatRoutes({ bookCatRouter, makeExpressCallback })

const services = Object.freeze({ bookCatRoute })

module.exports = { bookCatRouter, services, bookCatRoute }