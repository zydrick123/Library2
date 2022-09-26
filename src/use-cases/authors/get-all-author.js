const getAllAuthor = ({ authorDB }) => {
    return async function list() {
        let authorList = []

        const result = await authorDB.getAllAuthor({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.AuthorID = data.AuthorID
            dataValue.Firstname = data.firstname
            dataValue.Middlename = data.middlename
            dataValue.Lastname = data.lastname


            authorList.push(dataValue)

        }
        console.log('test')
        console.log('use-cases triggered', authorList)

        return authorList
    }

}
module.exports = getAllAuthor