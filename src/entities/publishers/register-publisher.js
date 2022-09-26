const makePublisher = ({ data }) => {

    const { firstname, middlename, lastname, location } = data;
    if (!firstname) {
        throw new Error('Please enter firstname')
    }
    if (!lastname) {
        throw new Error('Please enter lastname')
    }
    if (!location) {
        throw new Error('Please enter location')
    }


    return Object.freeze({
        getPublisherFirstname: () => firstname,
        getPublisherMiddlename: () => middlename,
        getPublisherLastname: () => lastname,
        getLocation: () => location,

    })
}
module.exports = makePublisher