const makeBorrower = ({ data }) => {

    const { ReaderID, CopyID, DateIssued, DateReturned, Penalty, Status } = data;
    if (!ReaderID) {
        throw new Error('Please enter ReaderID')
    }
    if (!CopyID) {
        throw new Error('Please enter CopyID')
    }
    if (!DateIssued) {
        throw new Error('Please enter DateIssued')
    }



    if (!Status) {
        throw new Error('Please enter Status')
    }
    if (!LibrarianID) {
        throw new Error('Please enter Status')
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

    })
}
module.exports = makeBorrower