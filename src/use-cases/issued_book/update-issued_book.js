const updateIssued_Book = ({ issued_BookDB, updateIssued_Books_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await issued_BookDB.getIssued_Books({ id })

        if (prevData === 0) { throw new Error('no id found') }
        let entity = await updateIssued_Books_Entity({ data })

        const res = await issued_BookDB.updateIssued_Books({
            b_isbn: entity.getb_isbn(),
            l_librarian_id: entity.getl_librarian_id(),
            r_reader_id: entity.getr_reader_id(),
            return_date: entity.getreturn_date(),

            date_returned: entity.getdate_returned(),
            date_issued: entity.getdate_issued(),
            status: entity.getstatus(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update Issued_Book') }
        return {
            message: 'Issued_Book Updated'
        }
    }

}
module.exports = updateIssued_Book