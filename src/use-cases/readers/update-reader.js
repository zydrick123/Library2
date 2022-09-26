const updateReader = ({ readerDB, updateReader_Entity }) => {
    return async function patch(data) {
        const { id } = data
        const checkLibrarianID = await readerDB.checkLibrarianID({
            LibrarianID: entity.getLibrarianID(),

        })
        if (checkLibrarianID.length === 0) {
            throw new Error('LibrarianID does not exist')
        }
        let prevData = await readerDB.getReader({ id })
        // console.log(prevData)
        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateReader_Entity({ data })

        const res = await readerDB.updateReader({
            ReaderNo: entity.getReaderNo(),
            Firstname: entity.getFirstname(),
            Lastname: entity.getLastname(),
            Birthdate: entity.getBirthdate(),
            Gender: entity.getGender(),
            RegisterDate: entity.getRegisterDate(),
            ContactNo: entity.getContactNo(),
            Status: entity.getStatus(),
            CityID: entity.getCityID(),
            LibrarianID: entity.getLibrarianID(),

            id: entity.getID(),

        })

        if (res.length === 0) {


            //  console.log(entity)
            throw new Error('Failed to update reader')
        }


        return {

            message: 'Reader updated successfully', result: res[0]
        }



    }

}
module.exports = updateReader