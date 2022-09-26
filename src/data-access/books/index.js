const { conn } = require("../../config/db")
const bookQuery = require('./query')

const bookDB = bookQuery({ conn })
module.exports = bookDB