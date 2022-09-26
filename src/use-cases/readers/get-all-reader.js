// call from data access 
const getAllReader = ({ readerDB }) => {
    return async function list() {

        let readerList = []
        const result = await readerDB.getAllReader({})  //fetch data from database
        for (let data of result.rows) {
            const dataValue = {}
            dataValue.ReaderID = data.ReaderID
            dataValue.ReaderNo = data.ReaderNo
            dataValue.Firstname = data.Firstname
            dataValue.Lastname = data.Lastname
            dataValue.Birthdate = data.Birthdate
            dataValue.Gender = data.Gender
            dataValue.RegisterDate = data.RegisterDate
            dataValue.ContactNo = data.ContactNo
            dataValue.Status = data.Status
            dataValue.CityID = data.CityID
            dataValue.LibrarianID = data.LibrarianID



            readerList.push(dataValue)
        }
        console.log("use case triggered", readerList)
        return readerList
    }

}
module.exports = getAllReader


