const registerBookCat_Entity = require('./register-book-category')
const updateBookCat_Entity = require('./update-book-category')
const services = Object.freeze({ registerBookCat_Entity, updateBookCat_Entity })

module.exports = services, { registerBookCat_Entity, updateBookCat_Entity }