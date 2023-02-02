const updatestatus = ({ categoryDB }) => {
    return async function patch(data) {
        const { id } = data;

        let prevData = await categoryDB.getCategory({ id })

        if (prevData.length === 0) { throw new Error('no id found') }


        const res = await categoryDB.updatestatus({
            id: id,
        })

        if (res == null) {
            throw new Error('network error')
        }
        if (res === 0) { throw new Error('Failed to update Category') }
        return {
            message: 'Category Deleted'
        }

    }

}
module.exports = updatestatus