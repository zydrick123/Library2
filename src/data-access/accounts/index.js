const { conn } = require("../../config/db")
const accountQuery = require('./query')
const { encryptPasswordService, comparePasswordService } = require('../../helpers/services/index')

const accountDB = accountQuery({ conn, encryptPasswordService, comparePasswordService })
module.exports = accountDB