const createReader = ({ readerDB, registerReader_Entity }) => {
    return async function add(data) {

        let entity = await registerReader_Entity({ data })
        //     const { serial } = entity

        // const distinctReader = await bookDB.distinctReader({ serial })

        // if (distincBook.rowCount > 0) {
        //     throw new Error('Duplicate')
        // }
        const isExisting = await readerDB.isExisting({
            u_first_name: entity.getu_first_name(),
            u_last_name: entity.getu_last_name()
        })
        if (isExisting.length > 0) {
            throw new Error('User exist')
        }
        const checku_user_id = await readerDB.checku_user_id({
            u_user_id: entity.getu_user_id(),

        })
        if (checku_user_id.length === 0) {
            throw new Error('User does not exist')
        }

        const res = await readerDB.createReader({
            u_user_id: entity.getu_user_id(),
            u_first_name: entity.getu_first_name(),
            u_last_name: entity.getu_last_name(),
            date_of_birth: entity.getdate_of_birth(),
            city: entity.getcity(),




        })


        if (res) {
            return {
                message: 'Reader registered succesfully',
                ReaderNo: res[0].ReaderNo,
                u_first_name: res[0].u_first_name,
                u_last_name: res[0].u_last_name,
                date_of_birth: res[0].date_of_birth,
                city: res[0].city,
                u_user_id: res[0].u_user_id,


            }
        }
        // throw new Error('failed')

    }
}
module.exports = createReader