const updateLibrarian = ({ librarianDB, updateLibrarian_Entity }) => {
    return async function patch(data) {
        const { id } = data

        let prevData = await librarianDB.getLibrarian({ id })
        // console.log(prevData)
        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateLibrarian_Entity({ data })

        const res = await librarianDB.updateLibrarian({
            first_name: entity.getfirst_name(),
            last_name: entity.getlast_name(),
            u_user_id: entity.getu_user_id(),
            id: entity.getID(),

        })

        if (res.length === 0) {


            //  console.log(entity)
            throw new Error('Failed to update librarian')
        }


        return {

            message: 'Librarian updated successfully', result: res[0]
        }



    }

}
module.exports = updateLibrarian