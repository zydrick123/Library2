const express = require('express')
const makeExpressCallback = require('../../express-callback/index')

const userRoutes = require('./route')

const userRouter = express.Router()
const userRoute = userRoutes({ userRouter, makeExpressCallback })

const services = Object.freeze({ userRoute })

module.exports = { userRouter, services, userRoute }