const getAllCategory = ({ categoryDB }) => {
    return async function list() {
        let categoryList = []

        const result = await categoryDB.getAllCategory({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.subcategories = data.subcategories
            dataValue.category_name = data.category_name
            dataValue.category_id = data.category_id



            categoryList.push(dataValue)

        }


        return categoryList
    }

}
module.exports = getAllCategory