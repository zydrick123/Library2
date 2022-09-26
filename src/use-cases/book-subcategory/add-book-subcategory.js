const createBookSubCat = ({ bookSubCatDB, registerBookSubCat_Entity }) => {
    return async function add(data) {

        let entity = await registerBookSubCat_Entity({ data })

        const isExistings = await bookSubCatDB.isExisting({
            name: entity.getName(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('Book Category Exist')
        }

        const res = await bookSubCatDB.createBookSubCat({
            name: entity.getName(),

        })


        if (res) {
            return {
                message: 'Book subcategory registered successful',
                name: res[0].name,


            }
        }
        // throw new Error('failed')

    }
}
module.exports = createBookSubCat