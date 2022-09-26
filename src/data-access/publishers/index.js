const { conn } = require("../../config/db")
const publisherQuery = require('./query')

const publisherDB = publisherQuery({ conn })
module.exports = publisherDB