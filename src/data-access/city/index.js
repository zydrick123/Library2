const { conn } = require("../../config/db")
const cityQuery = require('./query')

const cityDB = cityQuery({ conn })
module.exports = cityDB