const { conn } = require("../../config/db")
const authorQuery = require('./query')

const authorDB = authorQuery({ conn })
module.exports = authorDB