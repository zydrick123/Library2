const updateBookCopy = ({ bookCopyDB, updateBookCopy_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await bookCopyDB.getBookCopy({ id })

        if (prevData === 0) { throw new Error('no id found') }
        let entity = await updateBookCopy_Entity({ data })

        const res = await bookCopyDB.updateBookCopy({
            copyNo: entity.getcopyNo(),
            b_bookID: entity.getb_bookID(),
            b_shelfID: entity.getb_shelfID(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update Book Copy') }
        return {
            message: 'Book Copy Updated'
        }
    }

}
module.exports = updateBookCopy