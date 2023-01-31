const getAllIssued_Book = ({ issued_BookDB }) => {
    return async function list() {
        let issued_BookList = []

        const result = await issued_BookDB.getAllIssued_Books({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.issue_id = data.issue_id
            dataValue.b_isbn = data.b_isbn
            dataValue.l_librarian_id = data.l_librarian_id
            dataValue.r_reader_id = data.r_reader_id
            dataValue.return_date = data.return_date
            dataValue.date_returned = data.date_returned
            dataValue.date_issued = data.date_issued
            dataValue.status = data.status


            issued_BookList.push(dataValue)

        }



        return issued_BookList
    }

}
module.exports = getAllIssued_Book