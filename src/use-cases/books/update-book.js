const updateBook = ({ bookDB, updateBook_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let entity = await updateBook_Entity({ data })
        let prevData = await bookDB.getBook({ id })

        if (prevData.length === 0) { throw new Error('no id found') }


        const res = await bookDB.updateBook({

            title: entity.gettitle(),
            publication_year: entity.getpublication_year(),
            author: entity.getauthor(),
            no_of_pages: entity.getno_of_pages(),
            no_of_copies: entity.getno_of_copies(),
            shelf: entity.getshelf(),
            p_publisher_id: entity.getp_publisher_id(),
            c_category_id: entity.getc_category_id(),

            id: entity.getID(),
        })

        if (res == null) {
            throw new Error('network error')
        }
        if (res === 0) { throw new Error('Failed to update Book') }
        return {
            message: 'Book Updated'
        }

    }

}
module.exports = updateBook