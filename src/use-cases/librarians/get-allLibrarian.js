// call from data access 
const getAllLibrarian = ({ librarianDB }) => {
    return async function list() {

        let librarianList = []
        const result = await librarianDB.getAllLibrarian({})  //fetch data from database
        for (let data of result.rows) {
            let date = new Date(data.RegisterDate)
            let newdate = date.toISOString().split('T')[0]
            const dataValue = {}
            dataValue.UserID = data.UserID
            dataValue.Firstname = data.Firstname
            dataValue.Middlename = data.Middlename
            dataValue.Lastname = data.Lastname
            dataValue.Gender = data.Gender
            dataValue.RegisterDate = newdate


            librarianList.push(dataValue)
        }
        console.log(librarianList)
        return librarianList
    }

}
module.exports = getAllLibrarian
