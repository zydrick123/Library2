const updateRequest = ({ data }) => {
    const { r_reader_id, b_isbn, date_requested, id } = data;
    // if (!r_reader_id) {
    //     throw new Error('Please enter Reader')
    // }
    if (!b_isbn) {
        throw new Error('Please enter b_isbn')
    }
    if (!date_requested) {
        throw new Error('Please enter date_requested')
    }
    if (!id) {

        throw new Error('Request error ID not found')
    }
    return Object.freeze({
        // getr_reader_id: () => r_reader_id,
        getb_isbn: () => b_isbn,
        getdate_requested: () => date_requested,
        getID: () => id
    })



}
module.exports = updateRequest