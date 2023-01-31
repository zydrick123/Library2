const createIssued_Book = ({ issued_BookDB, registerIssued_Books_Entity }) => {
    return async function add(data) {

        let entity = await registerIssued_Books_Entity({ data })



        const checkb_isbn = await issued_BookDB.checkb_isbn({
            b_isbn: entity.getb_isbn(),
        })
        if (checkb_isbn.length === 0) {
            throw new Error('Book Does not Exist')
        }
        const checkl_librarian_id = await issued_BookDB.checkl_librarian_id({
            l_librarian_id: entity.getl_librarian_id(),
        })
        if (checkl_librarian_id.length === 0) {
            throw new Error('Librarian Does not Exist')
        }
        const checkr_reader_id = await issued_BookDB.checkr_reader_id({
            r_reader_id: entity.getr_reader_id(),
        })
        if (checkr_reader_id.length === 0) {
            throw new Error('Reader Does not Exist')
        }


        const res = await issued_BookDB.createIssued_Books({
            b_isbn: entity.getb_isbn(),
            l_librarian_id: entity.getl_librarian_id(),
            r_reader_id: entity.getr_reader_id(),
            return_date: entity.getreturn_date(),

            date_returned: entity.getdate_returned(),
            date_issued: entity.getdate_issued(),
            status: entity.getstatus(),



        })


        if (res) {
            return {
                message: 'Issued_Book registered succesfully',
                b_isbn: res[0].b_isbn,
                l_librarian_id: res[0].l_librarian_id,
                r_reader_id: res[0].r_reader_id,
                return_date: res[0].return_date,

                date_returned: res[0].date_returned,
                date_issued: res[0].date_issued,
                status: res[0].status,

            }
        }
        // throw new Error('failed')

    }
}
module.exports = createIssued_Book