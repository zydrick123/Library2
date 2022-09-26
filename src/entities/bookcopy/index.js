const registerBookCopy_Entity = require('./register-bookcopy')
const updateBookCopy_Entity = require('./update-bookcopy')
const services = Object.freeze({ registerBookCopy_Entity, updateBookCopy_Entity })

module.exports = services, { registerBookCopy_Entity, updateBookCopy_Entity }