// call from data access 
const getAllLibrarian = ({ librarianDB }) => {
    return async function list() {

        let librarianList = []
        const result = await librarianDB.getAllLibrarian({})  //fetch data from database
        for (let data of result.rows) {


            const dataValue = {}
            dataValue.librarian_id = data.librarian_id
            dataValue.first_name = data.first_name
            dataValue.last_name = data.last_name
            dataValue.u_user_id = data.u_user_id



            librarianList.push(dataValue)
        }

        return librarianList
    }

}
module.exports = getAllLibrarian
