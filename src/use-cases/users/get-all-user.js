const getAllUser = ({ userDB }) => {
    return async function list() {
        let userList = []

        const result = await userDB.getAllUser({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.username = data.username
            dataValue.password = data.password

            userList.push(dataValue)

        }

        console.log('use-cases triggered', userList)

        return userList
    }

}
module.exports = getAllUser