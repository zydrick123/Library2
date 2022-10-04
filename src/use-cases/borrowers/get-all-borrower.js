const getAllBorrower = ({ borrowerDB }) => {
    return async function list() {
        let borrowerList = []

        const result = await borrowerDB.getAllBorrower({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.BorrowerID = data.BorrowerID
            dataValue.ReaderID = data.ReaderID
            dataValue.CopyID = data.CopyID
            dataValue.DateIssued = data.DateIssued
            dataValue.DateReturned = data.DateReturned

            dataValue.Penalty = data.Penalty
            dataValue.Status = data.Status
            dataValue.LibrarianID = data.LibrarianID
            dataValue.remarks = data.remarks
            dateValue.DueDate = data.DueDate

            borrowerList.push(dataValue)

        }



        return borrowerList
    }

}
module.exports = getAllBorrower