const updateLibrarian = ({ data }) => {
    const { Firstname, Middlename, Lastname, Gender, RegisterDate, id } = data;


    if (!Firstname) {
        throw new Error('Please enter Firstname')
    }
    if (!Lastname) {
        throw new Error('Please enter Lastname')
    }
    if (!Gender) {
        throw new Error('Please enter Gender')
    }
    if (!RegisterDate) {
        throw new Error('Please enter RegisterDate')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({

        getFirstname: () => Firstname,
        getMiddlename: () => Middlename,
        getLastname: () => Lastname,
        getGender: () => Gender,
        getRegisterDate: () => RegisterDate,

        getID: () => id
    })

}
module.exports = updateLibrarian