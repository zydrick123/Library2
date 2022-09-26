const updateAuthor = ({ authorDB, updateAuthor_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await authorDB.getAuthor({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateAuthor_Entity({ data })

        const res = await authorDB.updateAuthor({
            firstname: entity.getFirstname(),
            middlename: entity.getMiddlename(),
            lastname: entity.getLastname(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update Author') }
        return {
            message: 'Author Updated'
        }
    }

}
module.exports = updateAuthor