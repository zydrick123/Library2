const registerBookSubCat_Entity = require('./register-booksubcat')
const updateBookSubCat_Entity = require('./update-booksubcat')
const services = Object.freeze({ registerBookSubCat_Entity, updateBookSubCat_Entity })

module.exports = services, { registerBookSubCat_Entity, updateBookSubCat_Entity }