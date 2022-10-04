const createReader = ({ readerDB, registerReader_Entity }) => {
    return async function add(data) {

        let entity = await registerReader_Entity({ data })
        //     const { serial } = entity

        // const distinctReader = await bookDB.distinctReader({ serial })

        // if (distincBook.rowCount > 0) {
        //     throw new Error('Duplicate')
        // }
        const isExisting = await readerDB.isExisting({
            Firstname: entity.getFirstname(),
            Lastname: entity.getLastname()
        })
        if (isExisting.length > 0) {
            throw new Error('User exist')
        }
        const checkLibrarianID = await readerDB.checkLibrarianID({
            LibrarianID: entity.getLibrarianID(),

        })
        if (checkLibrarianID.length === 0) {
            throw new Error('LibrarianID does not exist')
        }

        const res = await readerDB.createReader({
            ReaderNo: entity.getReaderNo(),
            Firstname: entity.getFirstname(),
            Lastname: entity.getLastname(),
            Birthdate: entity.getBirthdate(),
            Gender: entity.getGender(),
            RegisterDate: entity.getRegisterDate(),
            ContactNo: entity.getContactNo(),
            Status: entity.getStatus(),
            City: entity.getCity(),
            LibrarianID: entity.getLibrarianID(),



        })


        if (res) {
            return {
                message: 'Reader registered succesfully',
                ReaderNo: res[0].ReaderNo,
                Firstname: res[0].Firstname,
                Lastname: res[0].Lastname,
                Birthdate: res[0].Birthdate,
                Gender: res[0].Gender,
                RegisterDate: res[0].RegisterDate,
                ContactNo: res[0].ContactNo,
                Status: res[0].Status,
                City: res[0].City,
                LibrarianID: res[0].LibrarianID,


            }
        }
        // throw new Error('failed')

    }
}
module.exports = createReader