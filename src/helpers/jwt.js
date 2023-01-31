const jwt = require('jsonwebtoken')
const JWTSecrets = require('../config/config')


module.exports = {

    issue(payload, expiresIn) {

        return jwt.sign(payload, JWTSecrets.JWTSecret, {
            expiresIn,
        })
    }
}