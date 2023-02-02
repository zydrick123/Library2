const updatestatus = ({ requestDB }) => {
    return async function patch(data) {
        const { id } = data;

        let prevData = await requestDB.getRequest({ id })

        if (prevData.length === 0) { throw new Error('no id found') }


        const res = await requestDB.updatestatus({
            id: id,
        })

        if (res == null) {
            throw new Error('network error')
        }
        if (res === 0) { throw new Error('Failed to update Request') }
        return {
            message: 'Request Deleted'
        }

    }

}
module.exports = updatestatus