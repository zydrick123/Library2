const selectRequest = ({ requestDB }) => {
    return async function patch(data) {
        const { id } = data

        const res = await requestDB.getRequestID({ id })
        // console.log(prevData)
        if (res.rows.length === 0) { throw new Error('no id found') }


        console.log(res.rows)

        return {
            request_id: res.rows[0].request_id,
            r_reader_id: res[0].r_reader_id,
            b_isbn: res[0].b_isbn,
            date_requested: res[0].date_requested,

        }



    }

}
module.exports = selectRequest