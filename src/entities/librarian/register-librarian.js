const makeLibrarian = ({ data }) => {

    const { Firstname, Middlename, Lastname, Gender, RegisterDate } = data;
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



    return Object.freeze({
        getFirstname: () => Firstname,
        getMiddlename: () => Middlename,
        getLastname: () => Lastname,
        getGender: () => Gender,
        getRegisterDate: () => RegisterDate,

    })
}
module.exports = makeLibrarian