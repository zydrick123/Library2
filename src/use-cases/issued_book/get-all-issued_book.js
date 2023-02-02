

const getAllIssued_Book = ({ issued_BookDB }) => {
    return async function list() {
        let issued_BookList = []
        // async function comparedate(d1, issue_id) {
        //     let date1 = new Date(d1).getTime()
        //     let datenow = Date.now()
        //     let status 
        //     if (date1 > datenow) {
        //         const update = await issued_BookDB.autoupdate({ issue_id })
        //         if (update === 0) {
        //             throw new Error("Failed")

        //         }
        //         return st
        //         console.log(datenow)
        //     }
        // }
        const result = await issued_BookDB.getAllIssued_Books({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.issue_id = data.issue_id

            dataValue.return_date = data.return_date
            dataValue.date_returned = data.date_returned
            dataValue.date_issued = data.date_issued
            // await comparedate({ d1: dataValue.return_date, issue_id: dataValue.issue_id })

            dataValue.status = data.status
            dataValue.b_isbn = data.b_isbn
            dataValue.title = data.title
            dataValue.r_reader_id = data.r_reader_id
            dataValue.u_first_name = data.u_first_name
            dataValue.u_last_name = data.u_last_name
            dataValue.l_librarian_id = data.l_librarian_id
            dataValue.first_name = data.first_name
            dataValue.last_name = data.last_name


            issued_BookList.push(dataValue)

        }



        return issued_BookList
    }

}
module.exports = getAllIssued_Book