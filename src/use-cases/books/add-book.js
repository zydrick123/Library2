const createBook = ({ bookDB, registerBook_Entity }) => {
    return async function add(data) {

        let entity = await registerBook_Entity({ data })

        const isExistings = await bookDB.isExisting({
            title: entity.gettitle()

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book exist')
        }
        const checkc_category_id = await bookDB.checkc_category_id({
            c_category_id: entity.getc_category_id()
        })
        if (checkc_category_id.length === 0) {
            throw new Error('Book Category Does not Exist')
        }
        const checkp_publisher_id = await bookDB.checkp_publisher_id({
            p_publisher_id: entity.getp_publisher_id()
        })
        if (checkp_publisher_id.length === 0) {
            throw new Error('Book Publisher Does not Exist')
        }



        const res = await bookDB.createBook({
            isbn: entity.getisbn(),
            title: entity.gettitle(),
            publication_year: entity.getpublication_year(),
            author: entity.getauthor(),
            no_of_pages: entity.getno_of_pages(),
            no_of_copies: entity.getno_of_copies(),
            shelf: entity.getshelf(),
            p_publisher_id: entity.getp_publisher_id(),
            c_category_id: entity.getc_category_id(),

        })


        if (res) {
            return {
                message: 'Book registered succesfully',
                isbn: res[0].isbn,
                title: res[0].title,
                publication_year: res[0].publication_year,
                author: res[0].author,
                no_of_pages: res[0].no_of_pages,
                no_of_copies: res[0].no_of_copies,
                shelf: res[0].shelf,
                p_publisher_id: res[0].p_publisher_id,
                c_category_id: res[0].c_category_id,

            }
        }

    }
}
module.exports = createBook