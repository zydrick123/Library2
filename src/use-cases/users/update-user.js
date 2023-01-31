const updateUser = ({ userDB, updateUser_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await userDB.getUser({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateUser_Entity({ data })

        const res = await userDB.updateUser({
            username: entity.getusername(),
            password: entity.getpassword(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update User') }
        return {
            message: 'User Updated'
        }
    }

}
module.exports = updateUser