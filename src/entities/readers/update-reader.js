const updateReader = ({ data }) => {
    const { ReaderNo, Firstname, Lastname, Birthdate, Gender, RegisterDate, ContactNo, Status, City, id } = data;


    if (!ReaderNo) {
        throw new Error('Please enter ReaderNo')
    }
    if (!Firstname) {
        throw new Error('Please enter Firstname')
    }
    if (!Lastname) {
        throw new Error('Please enter Lastname')
    }
    if (!Birthdate) {
        throw new Error('Please enter Birthdate')
    }
    if (!Gender) {
        throw new Error('Please enter Gender')
    }
    if (!RegisterDate) {
        throw new Error('Please enter RegisterDate')
    }
    if (!ContactNo) {
        throw new Error('Please enter ContactNo')
    }
    if (!Status) {
        throw new Error('Please enter Status')
    }
    if (!City) {
        throw new Error('Please enter City')
    }
    if (!LibrarianID) {
        throw new Error('Please enter LibrarianID')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({

        getReaderNo: () => ReaderNo,
        getFirstname: () => Firstname,
        getLastname: () => Lastname,
        getBirthdate: () => Birthdate,
        getGender: () => Gender,
        getRegisterDate: () => RegisterDate,
        getContactNo: () => ContactNo,
        getStatus: () => Status,
        getCity: () => City,
        getLibrarianID: () => LibrarianID,
        getID: () => id
    })

}
module.exports = updateReader