const makeBookCopy = ({ data }) => {

    const { copyNo, b_bookID, b_shelfID } = data;
    if (!copyNo) {
        throw new Error('Please enter Book Copy Number')
    }
    if (!b_bookID) {
        throw new Error('Please enter Book ID number')
    }
    if (!b_shelfID) {
        throw new Error('Please enter Shelf ID number')
    }


    return Object.freeze({
        getcopyNo: () => copyNo,
        getb_bookID: () => b_bookID,
        getb_shelfID: () => b_shelfID


    })
}
module.exports = makeBookCopy