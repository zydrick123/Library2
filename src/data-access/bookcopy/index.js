const { conn } = require("../../config/db")
const bookCopyQuery = require('./query')

const bookCopyDB = bookCopyQuery({ conn })
module.exports = bookCopyDB