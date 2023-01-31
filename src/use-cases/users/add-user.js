const createUser = ({ userDB, registerUser_Entity }) => {
    return async function add(data) {

        let entity = await registerUser_Entity({ data })

        const isExistings = await userDB.isExisting({
            username: entity.getusername(),
        })
        if (isExistings.length > 0) {
            throw new Error('User Exist')
        }
        const res = await userDB.createUser({
            username: entity.getusername(),
            password: entity.getpassword(),

        })
        if (res) {
            return {
                message: 'User registered successful',
                username: res[0].username,
                password: res[0].password,

            }
        }
    }
}
module.exports = createUser