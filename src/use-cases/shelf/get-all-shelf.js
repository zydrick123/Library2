const getAllShelf = ({ shelfDB }) => {
    return async function list() {
        let shelfList = []

        const result = await shelfDB.getAllShelf({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.shelfID = data.shelfID
            dataValue.Shelfname = data.shelfname
            dataValue.Location = data.location
            dataValue.CategoryID = data.CategoryID



            shelfList.push(dataValue)

        }
        console.log('test')
        console.log('use-cases triggered', shelfList)

        return shelfList
    }

}
module.exports = getAllShelf