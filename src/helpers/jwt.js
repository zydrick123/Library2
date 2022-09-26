const jwt = require('jsonwebtoken')
const JWTSecrets = require('../config/config')


module.exports = {

    issue(payload, expiresIn) {
        console.log(process.env.ACCESS_TOKEN_SECRET)
        return jwt.sign(payload, JWTSecrets.JWTSecret, {
            expiresIn,
        })
    }
}