const encryptPassword = ({ bcrypt }) => {
    return function encode(data) {
        const [Password] = data
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(Password, salt)
    }
}
module.exports = encryptPassword 