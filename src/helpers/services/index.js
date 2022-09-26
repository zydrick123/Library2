const bcrypt = require('bcrypt')
const encryptPassword = require('./encrypt-password')
const comparePassword = require('./compare-password')

const encryptPasswordService = encryptPassword({ bcrypt })
const comparePasswordService = comparePassword({ bcrypt })


const services = Object.freeze({
    encryptPasswordService,
    comparePasswordService
})

module.exports = services, {
    encryptPasswordService,
    comparePasswordService
}