const removeLibrarian = ({ librarianDB }) => {
    return async function select(data) {
        const { id } = data

        const res = await librarianDB.removeLibrarian({ id })

        let msg = 'Delete failed'
        if (res === 0) {
            throw new Error('ID not found')
        }
        msg = 'Item deleted successfully'
        return msg
    }
}
module.exports = removeLibrarian