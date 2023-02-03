const updateIssued_Book = ({ data }) => {
    const { b_isbn, l_librarian_id, r_reader_id, return_date, date_returned, date_issued, status, id } = data;
    if (!b_isbn) {
        throw new Error('Please enter b_isbn')
    }

    if (!r_reader_id) {
        throw new Error('Please enter r_reader_id')
    }
    if (!return_date) {
        throw new Error('Please enter return_date')
    }

    if (!date_issued) {
        throw new Error('Please enter date_issued')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }





    return Object.freeze({
        getb_isbn: () => b_isbn,
        getl_librarian_id: () => l_librarian_id,
        getr_reader_id: () => r_reader_id,
        getreturn_date: () => return_date,
        getdate_returned: () => date_returned,
        getdate_issued: () => date_issued,
        getstatus: () => status,
        getID: () => id


    })

}
module.exports = updateIssued_Book