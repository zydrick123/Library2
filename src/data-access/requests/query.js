

const RequestQuery = ({ conn }) => {
    return Object.freeze({
        getAllRequest,
        createRequest,
        getRequest,
        getRequestID,
        updateRequest,
        removeRequest,
        isExisting,
        checkr_reader_id,
        checkb_isbn,
        updatestatus
        // loginRequest


    })
    async function getAllRequest({ }) {
        try {
            const connection = await conn() //connection
            const response = await new Promise((resolve) => {
                let sql = 'SELECT * FROM "Requests" inner join "Books" on "Requests".b_isbn = "Books".isbn inner join "Readers" on "Requests".r_reader_id = "Readers".reader_id'
                connection.query(sql, (err, res) => {
                    connection.end()
                    if (err) resolve(err)
                    resolve(res)
                })
            })

            return response
        } catch (error) {
            console.log('error:', error)
        }
    }

    //create Request
    async function createRequest({ r_reader_id, b_isbn, date_requested }) {

        try {
            const connection = await conn()
            const params = [r_reader_id, b_isbn, date_requested, 'active']
            let sql = 'INSERT INTO "Requests" ("r_reader_id", "b_isbn", "date_requested", "r_status") VALUES ($1,$2,$3,$4) returning *'
            const response = await connection.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function getRequest({ id }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM "Requests" WHERE "request_id" = $1'
            let params = [id]
            const response = await connection.query(sql, params)


            return response.rows

        } catch (error) {
            console.log('Error: ', error)

        }
    }
    async function isExisting({ r_reader_id, b_isbn, date_requested }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM "Requests" WHERE "r_reader_id" = $1 AND "b_isbn" = $2 AND "date_requested" = $3';
            let params = [r_reader_id, b_isbn, date_requested]
            const response = await connection.query(sql, params)

            return response.rows

        } catch (error) {

            console.log('error: ')
        }
    }

    async function removeRequest({ id }) {
        try {
            const connect = await conn()
            let params = [id]
            const sql = 'DELETE FROM "Requests" WHERE "request_id" = $1'
            const response = await connect.query(sql, params)
            console.log('test', response)
            return response

        } catch (error) {

            console.log("Error: ", error);
        }
    }
    async function checkr_reader_id({ r_reader_id }) {
        try {
            const connect = await conn()
            const sql = 'SELECT * FROM "Readers" WHERE "reader_id" = $1'
            let params = [r_reader_id]
            const response = await connect.query(sql, params)

            return response.rows


        } catch (error) {
            console.log('error ID')
        }
    }

    async function checkb_isbn({ b_isbn }) {
        try {
            const connect = await conn()
            const sql = 'SELECT * FROM "Books" WHERE "isbn" = $1'
            let params = [b_isbn]
            const response = await connect.query(sql, params)

            return response.rows


        } catch (error) {
            console.log('error ID')
        }
    }

    async function getRequestID({ id }) {
        try {
            const connect = await conn()
            const sql = 'SELECT * FROM "Requests" WHERE "Request_id" = $1'
            let params = [id]
            console.log(id)
            const response = await connect.query(sql, params)
            if (response) {
                return response
            }

        } catch (error) {
            console.log('error ID')
        }
    }
    async function updateRequest({ r_reader_id, b_isbn, date_requested, id }) {




        try {
            const connect = await conn()

            let params = [r_reader_id, b_isbn, date_requested, id]
            const sql = 'UPDATE "Requests" SET "r_reader_id" = $1,"b_isbn" = $2, "date_requested" = $3  WHERE "request_id" = $4 returning *'

            const response = await connect.query(sql, params)

            return response.rows
        } catch (error) {
            console.log("Error: ", error);
        }

    }
    async function updatestatus({ id }) {
        try {
            const connect = await conn()
            let params = ['inactive', id]
            const sql = 'Update "Requests" Set "r_status" = $1  where "request_id" = $2'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
}
module.exports = RequestQuery