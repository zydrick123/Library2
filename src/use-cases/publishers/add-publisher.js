const createPublisher = ({ publisherDB, registerPublisher_Entity }) => {
    return async function add(data) {

        let entity = await registerPublisher_Entity({ data })

        const isExistings = await publisherDB.isExisting({
            firstname: entity.getPublisherFirstname(),
            lastname: entity.getPublisherLastname()
        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('User exist')
        }

        const res = await publisherDB.createPublisher({
            firstname: entity.getPublisherFirstname(),
            middlename: entity.getPublisherMiddlename(),
            lastname: entity.getPublisherLastname(),
            location: entity.getLocation(),

        })


        if (res) {
            return {
                message: 'Publisher registered succesfully',
                firstname: res[0].firstname,
                middlename: res[0].middlename,
                lastname: res[0].lastname,
                location: res[0].location

            }
        }
        // throw new Error('failed')

    }
}
module.exports = createPublisher