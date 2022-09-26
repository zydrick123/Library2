const { conn } = require("../../config/db")
const readerQuery = require('./query')

const { encryptPasswordService, comparePasswordService } = require('../../helpers/services/index')

const readerDB = readerQuery({ conn, encryptPasswordService, comparePasswordService })

module.exports = readerDB;