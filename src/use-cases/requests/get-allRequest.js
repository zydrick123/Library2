// call from data access 
const getAllRequest = ({ requestDB }) => {
    return async function list() {

        let requestList = []
        const result = await requestDB.getAllRequest({})  //fetch data from database
        for (let data of result.rows) {
            const dataValue = {}
            dataValue.request_id = data.request_id
            dataValue.r_reader_id = data.r_reader_id
            dataValue.b_isbn = data.b_isbn
            dataValue.date_requested = data.date_requested



            requestList.push(dataValue)
        }
        return requestList
    }

}
module.exports = getAllRequest
