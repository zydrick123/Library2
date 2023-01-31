const createCategory = ({ categoryDB, registerCategory_Entity }) => {
    return async function add(data) {

        let entity = await registerCategory_Entity({ data })

        const isExistings = await categoryDB.isExisting({
            category_name: entity.getName(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book Category Exist')
        }



        const res = await categoryDB.createCategory({
            category_name: entity.getName(),
            subcategories: entity.getSubcategories()

        })


        if (res) {
            return {
                message: 'Book subcategory registered successful',



            }
        }
        // throw new Error('failed')

    }
}
module.exports = createCategory