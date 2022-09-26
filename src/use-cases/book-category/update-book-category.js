const updateBookCat = ({ bookCatDB, updateBookCat_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await bookCatDB.getBookCat({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateBookCat_Entity({ data })

        const isExistings = await bookCatDB.isExisting({
            categoryName: entity.getName(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book Category Exist')
        }
        const res = await bookCatDB.updateBookCat({

            b_subcategoryID: entity.getSubID(),
            categoryName: entity.getName(),
            id: entity.getID(),

        })

        if (res === 0) { throw new Error('Failed to update Book subcategory') }
        return {
            message: 'Book Category Updated'
        }
    }

}
module.exports = updateBookCat