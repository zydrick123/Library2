const updateReader = ({ readerDB, updateReader_Entity }) => {
    return async function patch(data) {
        const { id } = data
        let entity = await updateReader_Entity({ data })
        const checku_user_id = await readerDB.checku_user_id({
            u_user_id: entity.getu_user_id(),

        })
        if (checku_user_id.length === 0) {
            throw new Error('User ID does not exist')
        }
        let prevData = await readerDB.getReader({ id })
        // console.log(prevData)
        if (prevData.length === 0) { throw new Error('no id found') }

        const res = await readerDB.updateReader({
            u_user_id: entity.getu_user_id(),
            u_first_name: entity.getu_first_name(),
            u_last_name: entity.getu_last_name(),
            date_of_birth: entity.getdate_of_birth(),
            city: entity.getcity(),
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