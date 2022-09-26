const { conn } = require("../../config/db")
const bookCatQuery = require('./query')

const bookCatDB = bookCatQuery({ conn })
module.exports = bookCatDB