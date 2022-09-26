const updateAccount = ({ accountDB, updateAccount_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await accountDB.getAccount({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateAccount_Entity({ data })

        const res = await accountDB.updateAccount({
            Username: entity.getUsername(),
            Password: entity.getPassword(),
            UserID: entity.getUserID(),
            Roles: entity.getRoles(),
            Status: entity.getStatus(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update Account') }
        return {
            message: 'Account Updated'
        }
    }

}
module.exports = updateAccount