const updatePublisher = ({ publisherDB, updatePublisher_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await publisherDB.getPublisher({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updatePublisher_Entity({ data })

        const res = await publisherDB.updatePublisher({
            firstname: entity.getPublisherFirstname(),
            middlename: entity.getPublisherMiddlename(),
            lastname: entity.getPublisherLastname(),
            location: entity.getLocation(),
            id: entity.getID(),
        })
        if (res.length === 0) { throw new Error('Failed to update Publisher') }
        return {
            message: 'Publisher Updated'
        }
    }

}
module.exports = updatePublisher