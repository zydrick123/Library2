const updateBookSubCat = ({ bookSubCatDB, updateBookSubCat_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await bookSubCatDB.getBookSubCat({ id })

        if (prevData.length === 0) { throw new Error('no id found') }


        let entity = await updateBookSubCat_Entity({ data })

        const res = await bookSubCatDB.updateBookSubCat({
            name: entity.getName(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update Book subcategory') }
        return {
            message: 'Book subcategory Updated'
        }
    }

}
module.exports = updateBookSubCat