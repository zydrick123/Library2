const createBook = ({ bookDB, registerBook_Entity }) => {
    return async function add(data) {

        let entity = await registerBook_Entity({ data })

        const isExistings = await bookDB.isExisting({
            Title: entity.getTitle()

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book exist')
        }
        const checkAuthorID = await bookDB.checkAuthorID({
            AuthorID: entity.getAuthorID()
        })
        if (checkAuthorID.length === 0) {
            throw new Error('Book Author Does not Exist')
        }
        const checkPublisherID = await bookDB.checkPublisherID({
            PublisherID: entity.getPublisherID()
        })
        if (checkPublisherID.length === 0) {
            throw new Error('Book Publisher Does not Exist')
        }



        const res = await bookDB.createBook({
            ISBN: entity.getISBN(),
            Title: entity.getTitle(),
            YearPublish: entity.getYearPublish(),
            AuthorID: entity.getAuthorID(),
            PageNo: entity.getPageNo(),

            PublisherID: entity.getPublisherID(),

        })


        if (res) {
            return {
                message: 'Book registered succesfully',
                ISBN: res[0].ISBN,
                Title: res[0].Title,
                YearPublish: res[0].YearPublish,
                AuthorID: res[0].AuthorID,
                PageNo: res[0].PageNo,

                PublisherID: res[0].PublisherID,


            }
        }
        // throw new Error('failed')

    }
}
module.exports = createBook