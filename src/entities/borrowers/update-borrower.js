const updateBorrower = ({ data }) => {
    const { ReaderID, CopyID, DateIssued, DateReturned, Penalty, Status, LibrarianID, remarks } = data;
    if (!ReaderID) {
        throw new Error('Please enter ReaderID')
    }
    if (!CopyID) {
        throw new Error('Please enter CopyID')
    }
    if (!DateIssued) {
        throw new Error('Please enter DateIssued')
    }



    if (!LibrarianID) {
        throw new Error('Please enter LibrarianID')
    }



    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({

        getReaderID: () => ReaderID,
        getCopyID: () => CopyID,
        getDateIssued: () => DateIssued,
        getDateReturned: () => DateReturned,

        getPenalty: () => Penalty,
        getStatus: () => Status,
        getLibrarianID: () => LibrarianID,
        getremarks: () => remarks,
        getID: () => id
    })

}
module.exports = updateBorrower