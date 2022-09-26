const createAuthor = ({ authorDB, registerAuthor_Entity }) => {
    return async function add(data) {

        let entity = await registerAuthor_Entity({ data })

        const isExistings = await authorDB.isExisting({
            firstname: entity.getFirstname(),
            lastname: entity.getLastname()
        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('User exist')
        }

        const res = await authorDB.createAuthor({
            firstname: entity.getFirstname(),
            middlename: entity.getMiddlename(),
            lastname: entity.getLastname(),

        })


        if (res) {
            return {
                message: 'Author registered succesfully',
                firstname: res[0].firstname,
                middlename: res[0].middlename,
                lastname: res[0].lastname,

            }
        }
        // throw new Error('failed')

    }
}
module.exports = createAuthor