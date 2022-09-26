const getAllBookSubCat = ({ bookSubCatDB }) => {
    return async function list() {
        let bookSubCatList = []

        const result = await bookSubCatDB.getAllBookSubCat({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.SubcategoryID = data.SubcategoryID
            dataValue.name = data.name



            bookSubCatList.push(dataValue)

        }

        console.log('use-cases triggered', bookSubCatList)

        return bookSubCatList
    }

}
module.exports = getAllBookSubCat