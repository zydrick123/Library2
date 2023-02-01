const updatestatus = ({ bookDB }) => {
    return async function patch(data) {
        const { id } = data;

        let prevData = await bookDB.getBook({ id })

        if (prevData.length === 0) { throw new Error('no id found') }


        const res = await bookDB.updatestatus({
            id: id,
        })

        if (res == null) {
            throw new Error('network error')
        }
        if (res === 0) { throw new Error('Failed to update Book') }
        return {
            message: 'Book Deleted'
        }

    }

}
module.exports = updatestatus