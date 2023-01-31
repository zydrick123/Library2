const makePublisher = ({ data }) => {

    const { publisher_name, location } = data;
    if (!publisher_name) {
        throw new Error('Please enter publisher_name')
    }

    if (!location) {
        throw new Error('Please enter location')
    }


    return Object.freeze({
        getPublisherPublisher_name: () => publisher_name,
        getLocation: () => location,

    })
}
module.exports = makePublisher