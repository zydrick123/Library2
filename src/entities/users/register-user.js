const makeUser = ({ data }) => {

    const { username, password } = data;
    if (!username) {
        throw new Error('Please enter username')
    }
    if (!password) {
        throw new Error('Please enter password')
    }




    return Object.freeze({
        getusername: () => username,
        getpassword: () => password,

    })
}
module.exports = makeUser