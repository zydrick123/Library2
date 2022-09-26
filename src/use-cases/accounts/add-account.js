const createAccount = ({ accountDB, registerAccount_Entity }) => {
    return async function add(data) {

        let entity = await registerAccount_Entity({ data })

        const isExistings = await accountDB.isExisting({
            Username: entity.getUsername(),
        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('User Exist')
        }

        const checkUserID = await accountDB.checkUserID({
            UserID: entity.getUserID(),
        })
        if (checkUserID.length === 0) {
            throw new Error('UserID Does not Exist')
        }

        const res = await accountDB.createAccount({
            Username: entity.getUsername(),
            Password: entity.getPassword(),
            UserID: entity.getUserID(),
            Roles: entity.getRoles(),
            Status: entity.getStatus(),


        })


        if (res) {
            return {
                message: 'Account registered successful',
                Username: res[0].Username,
                Password: res[0].Password,
                UserID: res[0].UserID,
                Roles: res[0].Roles,
                Status: res[0].Status,



            }
        }
        // throw new Error('failed')

    }
}
module.exports = createAccount