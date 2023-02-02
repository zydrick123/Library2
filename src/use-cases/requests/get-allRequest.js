// call from data access 
const getAllRequest = ({ requestDB }) => {
    return async function list() {

        let requestList = []
        const result = await requestDB.getAllRequest({})  //fetch data from database
        for (let data of result.rows) {
            const dataValue = {}
            dataValue.request_id = data.request_id
            dataValue.date_requested = data.date_requested
            dataValue.r_reader_id = data.r_reader_id
            dataValue.u_first_name = data.u_first_name
            dataValue.u_last_name = data.u_last_name
            dataValue.b_isbn = data.b_isbn
            dataValue.title = data.title
            dataValue.r_status = data.r_status


            requestList.push(dataValue)
        }
        return requestList
    }

}
module.exports = getAllRequest
