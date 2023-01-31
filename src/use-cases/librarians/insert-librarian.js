const createLibrarian = ({ librarianDB, registerLibrarian_Entity }) => {
    return async function add(data) {

        let entity = await registerLibrarian_Entity({ data })

        const isExisting = await librarianDB.isExisting({
            first_name: entity.getfirst_name(),
            last_name: entity.getlast_name()
        })

        if (isExisting.length > 0) {
            throw new Error('Librarian exist')
        }
        const checku_user_id = await librarianDB.checku_user_id({
            u_user_id: entity.getu_user_id(),

        })

        if (checku_user_id.length === 0) {
            throw new Error('User does not exist')
        }

        const res = await librarianDB.createLibrarian({
            first_name: entity.getfirst_name(),
            last_name: entity.getlast_name(),

            u_user_id: entity.getu_user_id(),
        })


        if (res) {
            return {
                message: 'Librarian registered succesfully',
                first_name: res[0].first_name,
                last_name: res[0].last_name,
                u_user_id: res[0].u_user_id,

            }
        }

    }
}
module.exports = createLibrarian