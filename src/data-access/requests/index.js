
const { conn } = require("../../config/db")
const requestQuery = require('./query')



const requestDB = requestQuery({ conn })

module.exports = requestDB;