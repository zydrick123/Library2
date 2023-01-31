// call from data access 
const getAllReader = ({ readerDB }) => {
    return async function list() {

        let readerList = []
        const result = await readerDB.getAllReader({})  //fetch data from database
        for (let data of result.rows) {
            const dataValue = {}
            dataValue.reader_id = data.reader_id
            dataValue.u_user_id = data.u_user_id
            dataValue.u_first_name = data.u_first_name
            dataValue.u_last_name = data.u_last_name
            dataValue.date_of_birth = data.date_of_birth
            dataValue.city = data.city





            readerList.push(dataValue)
        }

        return readerList
    }

}
module.exports = getAllReader


