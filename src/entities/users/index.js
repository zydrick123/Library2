const registerUser_Entity = require('./register-user')
const updateUser_Entity = require('./update-user')
const loginUser_Entity = require('.//login-user')
const services = Object.freeze({ registerUser_Entity, updateUser_Entity, loginUser_Entity })

module.exports = services, { registerUser_Entity, updateUser_Entity, loginUser_Entity }