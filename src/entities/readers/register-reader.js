const makeReader = ({ data }) => {

    const { ReaderNo, Firstname, Lastname, Birthdate, Gender, RegisterDate, ContactNo, Status, CityID } = data;
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
    if (!CityID) {
        throw new Error('Please enter CityID')
    }
    if (!LibrarianID) {
        throw new Error('Please enter LibrarianID')
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
        getCityID: () => CityID,
        getLibrarianID: () => LibrarianID,


    })
}
module.exports = makeReader