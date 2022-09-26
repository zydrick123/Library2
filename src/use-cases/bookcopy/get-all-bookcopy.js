const getAllBookCopy = ({ bookCopyDB }) => {
    return async function list() {
        let bookCopyList = []

        const result = await bookCopyDB.getAllBookCopy({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.copyID = data.copyID
            dataValue.copyNo = data.copyNo
            dataValue.b_bookID = data.b_bookID
            dataValue.b_shelfID = data.b_shelfID



            bookCopyList.push(dataValue)

        }

        console.log('use-cases triggered', bookCopyList)

        return bookCopyList
    }

}
module.exports = getAllBookCopy