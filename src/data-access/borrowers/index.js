const { conn } = require("../../config/db")
const borrowerQuery = require('./query')

const borrowerDB = borrowerQuery({ conn })
module.exports = borrowerDB