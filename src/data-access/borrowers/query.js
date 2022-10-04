const borrowerQuery = ({ conn }) => {
    return Object.freeze({
        getAllBorrower,
        createBorrower,
        checkCopyID,
        updateBorrower,
        getBorrower,
        checkReaderID,
        checkLibrarianID

    })
    async function getAllBorrower({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM borrowers'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createBorrower({ ReaderID, CopyID, DateIssued, DateReturned, Penalty, Status, LibrarianID, remarks, DueDate }) {
        try {
            const connect = await conn()

            let params = [ReaderID, CopyID, DateIssued, DateReturned, Penalty, Status, LibrarianID, remarks, DueDate]
            let sql = 'INSERT INTO borrowers ( "ReaderID", "CopyID", "DateIssued", "DateReturned",  "Penalty", "Status","LibrarianID",remarks,"DueDate") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async function updateBorrower({ ReaderID, CopyID, DateIssued, DateReturned, Penalty, Status, LibrarianID, remarks, id, DueDate }) {
        try {
            const connect = await conn()
            let params = [ReaderID, CopyID, DateIssued, DateReturned, , Penalty, Status, LibrarianID, remarks, DueDate, id]
            const sql = 'UPDATE borrowers SET "ReaderID"= $1, "CopyID"= $2, "DateIssued"= $3, "DateReturned" = $4,  "Penalty" = $5, "Status" = $6 ,"LibrarianID" = $7 , remarks = $8,"DueDate" = $9 WHERE "BorrowerID" = $10 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getBorrower({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM borrowers WHERE "BorrowerID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }

    async function checkReaderID({ ReaderID }) {
        try {
            const connect = await conn()
            let params = [ReaderID]
            const sql = 'SELECT * FROM borrowers WHERE EXISTS (SELECT * FROM readers WHERE "ReaderID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkCopyID({ CopyID }) {
        try {
            const connect = await conn()
            let params = [CopyID]
            const sql = 'SELECT * FROM borrowers WHERE EXISTS (SELECT * FROM bookcopy WHERE "copyID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkLibrarianID({ LibrarianID }) {
        try {
            const connect = await conn()
            let params = [LibrarianID]
            const sql = 'SELECT * FROM borrowers WHERE EXISTS (SELECT * FROM librarians WHERE "UserID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }

    // async function removeBorrower({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM borrowers WHERE "BorrowerID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = borrowerQuery