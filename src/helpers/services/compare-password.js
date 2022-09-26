const comparePassword = ({ bcrypt }) => {
    return function encode(data) {

        const { Password, encryptPassword } = data
        return bcrypt.compareSync(Password, encryptPassword)
    }
}
module.exports = comparePassword