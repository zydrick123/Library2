const express = require('express');
const makeExpressCallback = require('../../express-callback/index')

const librarianRoutes = require('./route')

const librarianRouter = express.Router();
const librarianRoute = librarianRoutes({ librarianRouter, makeExpressCallback })

const services = Object.freeze({ librarianRoute })
module.exports = {
    librarianRouter, librarianRoute, services
}