const createPublisher = ({ publisherDB, registerPublisher_Entity }) => {
    return async function add(data) {

        let entity = await registerPublisher_Entity({ data })

        const isExistings = await publisherDB.isExisting({
            publisher_name: entity.getPublisherPublisher_name(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('User exist')
        }

        const res = await publisherDB.createPublisher({
            publisher_name: entity.getPublisherPublisher_name(),

            location: entity.getLocation(),

        })


        if (res) {
            return {
                message: 'Publisher registered succesfully',
                publisher_name: res[0].publisher_name,
                location: res[0].location

            }
        }

    }
}
module.exports = createPublisher