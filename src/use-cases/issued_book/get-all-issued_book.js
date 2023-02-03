const date = require('date-and-time')

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
            let date1 = new Date()
            let date2 = new Date(data.return_date)
            let datef = date.format(date1, 'MM/DD/YYYY')
            let datef2 = date.format(date2, 'MM/DD/YYYY')
            dataValue.return_date = data.return_date
            if (datef > datef2 && data.date_returned == null) {
                console.log('overdue')
                const res = await issued_BookDB.autoupdate({
                    issue_id: data.issue_id
                })
                dataValue.ib_status = "Overdue"
            } else {
                dataValue.ib_status = data.ib_status
            }
            dataValue.date_returned = data.date_returned
            dataValue.date_issued = data.date_issued
            // await comparedate({ d1: dataValue.return_date, issue_id: dataValue.issue_id })

            // dataValue.ib_status = data.ib_status
            dataValue.b_isbn = data.b_isbn
            dataValue.title = data.title
            dataValue.reader_name = data.reader_name
            dataValue.l_librarian_id = data.l_librarian_id
            dataValue.first_name = data.first_name
            dataValue.last_name = data.last_name

            issued_BookList.push(dataValue)


        }



        return issued_BookList
    }

}
module.exports = getAllIssued_Book