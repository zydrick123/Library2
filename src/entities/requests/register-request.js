const makeRequest = ({ data }) => {

    const { r_reader_id, b_isbn, date_requested } = data;

    if (!b_isbn) {
        throw new Error('Please enter b_isbn')
    }
    if (!date_requested) {
        throw new Error('Please enter date_requested')
    }
    return Object.freeze({
        // getr_reader_id: () => r_reader_id,
        getb_isbn: () => b_isbn,
        getdate_requested: () => date_requested,
    })
}
module.exports = makeRequest