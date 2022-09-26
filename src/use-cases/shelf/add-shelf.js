const createShelf = ({ shelfDB, registerShelf_Entity }) => {
    return async function add(data) {

        let entity = await registerShelf_Entity({ data })

        const isExistings = await shelfDB.isExisting({
            shelfname: entity.getShelfname(),
            location: entity.getLocation(),
        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('shelf exist')
        }
        const checkCategoryID = await shelfDB.checkCategoryID({
            CategoryID: entity.getCategoryID(),
        })
        if (checkCategoryID.length === 0) {
            throw new Error('Book Category Does not Exist')
        }

        const res = await shelfDB.createShelf({
            shelfname: entity.getShelfname(),
            location: entity.getLocation(),
            CategoryID: entity.getCategoryID(),


        })


        if (res) {
            return {
                message: 'Shelf registered succesfully',
                shelfname: res[0].shelfname,
                location: res[0].location,
                CategoryID: res[0].CategoryID,


            }
        }


        // throw new Error('failed')

    }
}
module.exports = createShelf