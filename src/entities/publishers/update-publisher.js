const updatePublisher = ({ data }) => {
    const { firstname, middlename, lastname, location, id } = data;


    if (!firstname) {
        throw new Error('Please enter firstname')
    }
    if (!lastname) {
        throw new Error('Please enter lastname')
    }
    if (!location) {
        throw new Error('Please enter location')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({
        getPublisherFirstname: () => firstname,
        getPublisherMiddlename: () => middlename,
        getPublisherLastname: () => lastname,
        getLocation: () => location,
        getID: () => id
    })

}
module.exports = updatePublisher