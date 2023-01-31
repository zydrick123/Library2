const updateRequest = ({ requestDB, updateRequest_Entity }) => {
    return async function patch(data) {
        const { id } = data

        let prevData = await requestDB.getRequest({ id })
        // console.log(prevData)
        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateRequest_Entity({ data })

        const res = await requestDB.updateRequest({
            r_reader_id: entity.getr_reader_id(),
            b_isbn: entity.getb_isbn(),

            date_requested: entity.getdate_requested(),
            id: entity.getID(),

        })

        if (res.length === 0) {


            //  console.log(entity)
            throw new Error('Failed to update request')
        }


        return {

            message: 'Request updated successfully', result: res[0]
        }



    }

}
module.exports = updateRequest