const librarianLogin = ({ data }) => {
    const { username, password } = data;
    if (!username) {
        throw new Error('Please enter username')
    }
    if (!password) {
        throw new Error('Please enter password')
    }
    return Object.freeze({
        getUsername: () => username,
        getPassword: () => password
    })
}
module.exports = librarianLogin