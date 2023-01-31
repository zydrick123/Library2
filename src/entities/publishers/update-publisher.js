const updatePublisher = ({ data }) => {
    const { publisher_name, location, id } = data;


    if (!publisher_name) {
        throw new Error('Please enter publisher_name')
    }

    if (!location) {
        throw new Error('Please enter location')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({
        getPublisherPublisher_name: () => publisher_name,
        getLocation: () => location,
        getID: () => id
    })

}
module.exports = updatePublisher