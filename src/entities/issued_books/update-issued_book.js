const updateIssued_Book = ({ data }) => {
    const { b_isbn, reader_name, return_date, date_returned, date_issued, status, id } = data;


    if (!id) {

        throw new Error('Request error ID not found')
    }





    return Object.freeze({
        getb_isbn: () => b_isbn,

        getreader_name: () => reader_name,
        getreturn_date: () => return_date,
        getdate_returned: () => date_returned,
        getdate_issued: () => date_issued,
        getstatus: () => status,
        getID: () => id


    })

}
module.exports = updateIssued_Book