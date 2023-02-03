const createRequest = ({ requestDB, registerRequest_Entity }) => {
    return async function add(data) {

        let entity = await registerRequest_Entity({ data })

        // const isExisting = await requestDB.isExisting({
        //     // r_reader_id: entity.getr_reader_id(),
        //     b_isbn: entity.getb_isbn(),
        //     date_requested: entity.getdate_requested()
        // })

        // if (isExisting.length > 0) {
        //     throw new Error('Request exist')
        // }


        // const checkr_reader_id = await requestDB.checkr_reader_id({
        //     r_reader_id: entity.getr_reader_id(),

        // })

        // if (checkr_reader_id.length === 0) {
        //     throw new Error('Reader does not exist')
        // }

        const checkb_isbn = await requestDB.checkb_isbn({
            b_isbn: entity.getb_isbn(),

        })

        if (checkb_isbn.length === 0) {
            throw new Error('Book does not exist')
        }
        const res = await requestDB.createRequest({
            // r_reader_id: entity.getr_reader_id(),
            b_isbn: entity.getb_isbn(),

            date_requested: entity.getdate_requested(),
        })


        if (res) {
            return {
                message: 'Request registered succesfully',
                // r_reader_id: res[0].r_reader_id,
                b_isbn: res[0].b_isbn,
                date_requested: res[0].date_requested,

            }
        }

    }
}
module.exports = createRequest