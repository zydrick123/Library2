const updateCategory = ({ categoryDB, updateCategory_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await categoryDB.getCategory({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateCategory_Entity({ data })

        const isExistings = await categoryDB.isExisting({
            category_name: entity.getName(),
            subcategories: entity.getSubcategories(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book Category Exist')
        }
        const res = await categoryDB.updateCategory({

            subcategories: entity.getSubcategories(),
            category_name: entity.getName(),
            id: entity.getID(),

        })

        if (res === 0) { throw new Error('Failed to update Book subcategory') }
        return {
            message: 'Book Category Updated'
        }
    }

}
module.exports = updateCategory