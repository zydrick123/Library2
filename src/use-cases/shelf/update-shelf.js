const updateShelf = ({ shelfDB, updateShelf_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await shelfDB.getShelf({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateShelf_Entity({ data })

        const res = await shelfDB.updateShelf({
            shelfname: entity.getShelfname(),
            location: entity.getLocation(),
            CategoryID: entity.getCategoryID(),
            id: entity.getID(),
        })
        if (res.length === 0) { throw new Error('Failed to update Shelf') }
        return {
            message: 'Shelf Updated'
        }
    }

}
module.exports = updateShelf