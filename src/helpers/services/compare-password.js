const comparePassword = ({ bcrypt }) => {
    return function encode(data) {

        const { password, encryptPassword } = data

        return bcrypt.compareSync(password, encryptPassword)
    }
}
module.exports = comparePassword