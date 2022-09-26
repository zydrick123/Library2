const createLibrarian = ({ librarianDB, registerLibrarian_Entity }) => {
    return async function add(data) {

        let entity = await registerLibrarian_Entity({ data })
        //     const { serial } = entity

        // const distinctLibrarian = await bookDB.distinctLibrarian({ serial })

        // if (distincBook.rowCount > 0) {
        //     throw new Error('Duplicate')
        // }
        const isExisting = await librarianDB.isExisting({
            Firstname: entity.getFirstname(),
            Lastname: entity.getLastname()
        })

        if (isExisting.length > 0) {
            throw new Error('User exist')
        }

        const res = await librarianDB.createLibrarian({
            Firstname: entity.getFirstname(),
            Middlename: entity.getMiddlename(),
            Lastname: entity.getLastname(),
            Gender: entity.getGender(),
            RegisterDate: entity.getRegisterDate(),


        })


        if (res) {
            return {
                message: 'Librarian registered succesfully',
                Firstname: res[0].Firstname,
                Middlename: res[0].Middlename,
                Lastname: res[0].Lastname,
                Gender: res[0].Gender,
                RegisterDate: res[0].RegisterDate,

            }
        }
        // throw new Error('failed')

    }
}
module.exports = createLibrarian