const { conn } = require("../../config/db")
const userQuery = require('./query')
const { encryptPasswordService, comparePasswordService } = require('../../helpers/services/index')

const userDB = userQuery({ conn, encryptPasswordService, comparePasswordService })
module.exports = userDB