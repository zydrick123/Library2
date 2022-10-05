const getAllAccount = ({ accountDB }) => {
    return async function list() {
        let accountList = []

        const result = await accountDB.getAllAccount({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.Username = data.Username
            dataValue.Password = data.Password
            dataValue.Lastname = data.Lastname
            dataValue.Roles = data.Roles
            dataValue.Status = data.Status




            accountList.push(dataValue)

        }

        console.log('use-cases triggered', accountList)

        return accountList
    }

}
module.exports = getAllAccount