const { conn } = require("../../config/db")
const categoryQuery = require('./query')

const categoryDB = categoryQuery({ conn })
module.exports = categoryDB