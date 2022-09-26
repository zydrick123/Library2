const makeAuthor = ({ data }) => {

    const { firstname, middlename, lastname } = data;
    if (!firstname) {
        throw new Error('Please enter firstname')
    }
    if (!lastname) {
        throw new Error('Please enter lastname')
    }



    return Object.freeze({
        getFirstname: () => firstname,
        getMiddlename: () => middlename,
        getLastname: () => lastname,

    })
}
module.exports = makeAuthor