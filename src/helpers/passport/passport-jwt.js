const Passport = require('passport')
const PassportJWT = require('passport-jwt')
const SECRET_KEY = require('../../config/config')
const accountDB = require('../../data-access/accounts/index')


const configureJWTStrat = () => {
    const opts = {
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: SECRET_KEY.JWTSecret
    }
    Passport.use(new PassportJWT.Strategy(opts, async (payload, done) => {
        const { Username } = payload
        try {
            const verfied = await accountDB.isExisting({ Username: Username })

            if (!verfied) {
                return done(null, false)
            }
            return done(null, true)
        } catch (error) {
            return done(error, false)
        }
    }))
}
module.exports = { configureJWTStrat }

