const { conn } = require("../../config/db")
const shelfQuery = require('./query')

const shelfDB = shelfQuery({ conn })
module.exports = shelfDB