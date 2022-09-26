const createBookCat = ({ bookCatDB, registerBookCat_Entity }) => {
    return async function add(data) {

        let entity = await registerBookCat_Entity({ data })

        const isExistings = await bookCatDB.isExisting({
            categoryName: entity.getName(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book Category Exist')
        }

        const checkSubID = await bookCatDB.checkSubID({
            b_subcategoryID: entity.getSubID()
        })
        if (checkSubID.length === 0) {
            throw new Error('Book Sub Category Does not Exist')
        }

        const res = await bookCatDB.createBookCat({
            categoryName: entity.getName(),
            b_subcategoryID: entity.getSubID()

        })


        if (res) {
            return {
                message: 'Book subcategory registered successful',



            }
        }
        // throw new Error('failed')

    }
}
module.exports = createBookCat