const createBookCopy = ({ bookCopyDB, registerBookCopy_Entity }) => {
    return async function add(data) {

        let entity = await registerBookCopy_Entity({ data })

        const isExistings = await bookCopyDB.isExisting({
            copyNo: entity.getcopyNo(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book Copy Exist')
        }

        const checkBookID = await bookCopyDB.checkBookID({
            b_bookID: entity.getb_bookID(),
        })
        if (checkBookID.length === 0) {
            throw new Error('Book ID Does not Exist')
        }
        const checkShelfID = await bookCopyDB.checkShelfID({
            b_shelfID: entity.getb_shelfID(),
        })
        if (checkShelfID.length === 0) {
            throw new Error('Shelf ID Does not Exist')
        }

        const res = await bookCopyDB.createBookCopy({
            copyNo: entity.getcopyNo(),
            b_bookID: entity.getb_bookID(),
            b_shelfID: entity.getb_shelfID(),

        })


        if (res) {
            return {
                message: 'Book Copy registered successful',
                copyNo: res[0].copyNo,
                b_bookID: res[0].b_bookID,
                b_shelfID: res[0].b_shelfID,


            }
        }
        // throw new Error('failed')

    }
}
module.exports = createBookCopy