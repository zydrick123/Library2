const updateAuthor = ({ data }) => {
    const { firstname, middlename, lastname, id } = data;


    if (!firstname) {
        throw new Error('Please enter firstname')
    }

    if (!lastname) {
        throw new Error('Please lastname')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({

        getFirstname: () => firstname,
        getMiddlename: () => middlename,
        getLastname: () => lastname,

        getID: () => id
    })

}
module.exports = updateAuthor