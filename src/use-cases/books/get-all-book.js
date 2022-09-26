const getAllBook = ({ bookDB }) => {
    return async function list() {
        let bookList = []

        const result = await bookDB.getAllBook({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.bookID = data.bookID
            dataValue.ISBN = data.ISBN
            dataValue.Title = data.Title
            dataValue.YearPublish = data.YearPublish
            dataValue.AuthorID = data.AuthorID
            dataValue.PageNo = data.PageNo
            dataValue.PublisherID = data.PublisherID


            bookList.push(dataValue)

        }

        console.log('use-cases triggered', bookList)

        return bookList
    }

}
module.exports = getAllBook