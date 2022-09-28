// call from data access 
const getAllLibrarian = ({ librarianDB }) => {
    return async function list() {

        let librarianList = []
        const result = await librarianDB.getAllLibrarian({})  //fetch data from database
        for (let data of result.rows) {
            let date = new Date(data.RegisterDate)
            const dataValue = {}
            dataValue.UserID = data.UserID
            dataValue.Firstname = data.Firstname
            dataValue.Middlename = data.Middlename
            dataValue.Lastname = data.Lastname
            dataValue.Gender = data.Gender
            dataValue.RegisterDate = date.getMonth() + '-' + date.getDay() + '-' + date.getFullYear()


            librarianList.push(dataValue)
        }
        console.log(librarianList)
        return librarianList
    }

}
module.exports = getAllLibrarian


