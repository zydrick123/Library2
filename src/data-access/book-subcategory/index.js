const { conn } = require("../../config/db")
const bookSubCatQuery = require('./query')

const bookSubCatDB = bookSubCatQuery({ conn })
module.exports = bookSubCatDB