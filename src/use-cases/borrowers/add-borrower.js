const createBorrower = ({ borrowerDB, registerBorrower_Entity }) => {
    return async function add(data) {

        let entity = await registerBorrower_Entity({ data })



        const checkReaderID = await borrowerDB.checkReaderID({
            ReaderID: entity.getReaderID(),
        })
        if (checkReaderID.length === 0) {
            throw new Error('ReaderID Does not Exist')
        }
        const checkCopyID = await borrowerDB.checkCopyID({
            CopyID: entity.getCopyID(),
        })
        if (checkCopyID.length === 0) {
            throw new Error('CopyID Does not Exist')
        }
        const checkLibrarianID = await borrowerDB.checkLibrarianID({
            LibrarianID: entity.getLibrarianID(),
        })
        if (checkLibrarianID.length === 0) {
            throw new Error('LibrarianID Does not Exist')
        }


        const res = await borrowerDB.createBorrower({
            ReaderID: entity.getReaderID(),
            CopyID: entity.getCopyID(),
            DateIssued: entity.getDateIssued(),
            DateReturned: entity.getDateReturned(),

            Penalty: entity.getPenalty(),
            Status: entity.getStatus(),
            LibrarianID: entity.getLibrarianID(),
            remarks: entity.getremarks(),
            DueDate: entity.getDueDate(),


        })


        if (res) {
            return {
                message: 'Borrower registered succesfully',
                ReaderID: res[0].ReaderID,
                CopyID: res[0].CopyID,
                DateIssued: res[0].DateIssued,
                DateReturned: res[0].DateReturned,

                Penalty: res[0].Penalty,
                Status: res[0].Status,
                LibrarianID: res[0].LibrarianID,
                remarks: res[0].remarks,
                DueDate: res[0].DueDate,



            }
        }
        // throw new Error('failed')

    }
}
module.exports = createBorrower