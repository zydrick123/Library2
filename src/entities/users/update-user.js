const updateUser = ({ data }) => {
    const { username, password, id } = data;


    if (!username) {
        throw new Error('Please enter username')
    }

    if (!password) {
        throw new Error('Please enter password')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({
        getusername: () => username,
        getpassword: () => password,
        getID: () => id,
    })

}
module.exports = updateUser