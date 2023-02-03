const issued_BooksQuery = ({ conn }) => {
    return Object.freeze({
        getAllIssued_Books,
        createIssued_Books,
        checkl_librarian_id,
        updateIssued_Books,
        getIssued_Books,
        checkb_isbn,
        checkr_reader_id,
        autoupdate
    })
    async function getAllIssued_Books({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM "Issued_Books" INNER JOIN "Books" ON "Issued_Books".b_isbn = "Books".isbn  INNER JOIN "Readers" on "Issued_Books".r_reader_id = "Readers".reader_id inner join "Librarians" on "Issued_Books".l_librarian_id = "Librarians".librarian_id'
            const response = await connect.query(sql)

            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createIssued_Books({ b_isbn, l_librarian_id, r_reader_id, return_date, date_returned, date_issued }) {
        try {
            const connect = await conn()

            let params = [b_isbn, l_librarian_id, r_reader_id, return_date, date_returned, date_issued]
            let sql = 'INSERT INTO "Issued_Books" ( "b_isbn", "l_librarian_id", "r_reader_id", "return_date",  "date_returned", "date_issued" ) VALUES ($1,$2,$3,$4,$5,$6) returning *'
            const response = await connect.query(sql, params)

            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    async function updateIssued_Books({ b_isbn, l_librarian_id, r_reader_id, return_date, date_returned, date_issued, status, id }) {
        try {
            const connect = await conn()
            let params = [b_isbn, l_librarian_id, r_reader_id, return_date, date_returned, date_issued, status, id]
            const sql = 'UPDATE "Issued_Books" SET "b_isbn"= $1, "l_librarian_id"= $2, "r_reader_id"= $3, "return_date" = $4,  "date_returned" = $5, "date_issued" = $6 ,"ib_status" = $7 WHERE "issue_id" = $8 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getIssued_Books({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM "Issued_Books" WHERE "issue_id" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }

    async function checkb_isbn({ b_isbn }) {
        try {
            const connect = await conn()
            let params = [b_isbn]
            const sql = 'SELECT * FROM "Books" WHERE "isbn" = $1'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkl_librarian_id({ l_librarian_id }) {
        try {
            const connect = await conn()
            let params = [l_librarian_id]
            const sql = 'SELECT * FROM "Librarians" WHERE "librarian_id" = $1'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkr_reader_id({ r_reader_id }) {
        try {
            const connect = await conn()
            let params = [r_reader_id]
            const sql = 'SELECT * FROM "Readers" WHERE "reader_id" = $1'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function autoupdate({ issue_id }) {
        try {
            const connect = await conn()
            let params = ['Overdue', issue_id]
            const sql = 'Update "Issued_Books" Set "ib_status" = $1 WHERE "issue_id" = $2'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }

}

module.exports = issued_BooksQuery