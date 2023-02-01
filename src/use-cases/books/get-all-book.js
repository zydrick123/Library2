const getAllBook = ({ bookDB }) => {
    return async function list() {
        let bookList = []

        const result = await bookDB.getAllBook({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.isbn = data.isbn
            dataValue.title = data.title
            dataValue.author = data.author
            dataValue.publication_year = data.publication_year
            dataValue.no_of_pages = data.no_of_pages
            dataValue.no_of_copies = data.no_of_copies
            dataValue.shelf = data.shelf
            dataValue.p_publisher_id = data.p_publisher_id
            dataValue.publisher_name = data.publisher_name
            dataValue.c_category_id = data.c_category_id
            dataValue.category_name = data.category_name
            dataValue.subcategories = data.subcategories
            dataValue.description = data.description
            dataValue.status = data.status
            bookList.push(dataValue)

        }



        return bookList
    }

}
module.exports = getAllBook