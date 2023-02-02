const updatestatus = ({ publisherDB }) => {
    return async function patch(data) {
        const { id } = data;

        let prevData = await publisherDB.getPublisher({ id })

        if (prevData.length === 0) { throw new Error('no id found') }


        const res = await publisherDB.updatestatus({
            id: id,
        })

        if (res == null) {
            throw new Error('network error')
        }
        if (res === 0) { throw new Error('Failed to update publisher') }
        return {
            message: 'Publisher Deleted'
        }

    }

}
module.exports = updatestatus