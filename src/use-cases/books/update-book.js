const updateBook = ({ bookDB, updateBook_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await bookDB.getBook({ id })

        if (prevData === 0) { throw new Error('no id found') }
        let entity = await updateBook_Entity({ data })

        const res = await bookDB.updateBook({
            ISBN: entity.getISBN(),
            Title: entity.getTitle(),
            YearPublish: entity.getYearPublish(),
            AuthorID: entity.getAuthorID(),
            PageNo: entity.getPageNo(),
            PublisherID: entity.getPublisherID(),

            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update Book') }
        return {
            message: 'Book Updated'
        }
    }

}
module.exports = updateBook