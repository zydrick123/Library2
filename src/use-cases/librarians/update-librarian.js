const updateLibrarian = ({ librarianDB, updateLibrarian_Entity }) => {
    return async function patch(data) {
        const { id } = data

        let prevData = await librarianDB.getLibrarian({ id })
        // console.log(prevData)
        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateLibrarian_Entity({ data })

        const res = await librarianDB.updateLibrarian({
            Firstname: entity.getFirstname(),
            Middlename: entity.getMiddlename(),
            Lastname: entity.getLastname(),
            Gender: entity.getGender(),

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