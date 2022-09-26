const { conn } = require("../../config/db")
const librarianQuery = require('./query')

const { encryptPasswordService, comparePasswordService } = require('../../helpers/services/index')

const librarianDB = librarianQuery({ conn, encryptPasswordService, comparePasswordService })

module.exports = librarianDB;