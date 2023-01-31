const { conn } = require("../../config/db")
const issued_BooksQuery = require('./query')

const issued_BooksDB = issued_BooksQuery({ conn })
module.exports = issued_BooksDB