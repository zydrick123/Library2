const updateBorrower = ({ borrowerDB, updateBorrower_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await borrowerDB.getBorrower({ id })

        if (prevData === 0) { throw new Error('no id found') }
        let entity = await updateBorrower_Entity({ data })

        const res = await borrowerDB.updateBorrower({
            ReaderID: entity.getReaderID(),
            CopyID: entity.getCopyID(),
            DateIssued: entity.getDateIssued(),
            DateReturned: entity.getDateReturned(),
            Quantity: entity.getQuantity(),
            Penalty: entity.getPenalty(),
            Status: entity.getStatus(),
            LibrarianID: entity.getLibrarianID(),
            remarks: entity.getremarks(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update Borrower') }
        return {
            message: 'Borrower Updated'
        }
    }

}
module.exports = updateBorrower