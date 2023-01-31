const registerCategory_Entity = require('./register-category')
const updateCategory_Entity = require('./update-category')
const services = Object.freeze({ registerCategory_Entity, updateCategory_Entity })

module.exports = services, { registerCategory_Entity, updateCategory_Entity }