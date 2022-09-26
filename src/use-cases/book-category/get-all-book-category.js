const getAllBookCat = ({ bookCatDB }) => {
    return async function list() {
        let bookCatList = []

        const result = await bookCatDB.getAllBookCat({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.b_subcategoryID = data.b_subcategoryID
            dataValue.categoryName = data.categoryName



            bookCatList.push(dataValue)

        }

        console.log('use-cases triggered', bookCatList)

        return bookCatList
    }

}
module.exports = getAllBookCat