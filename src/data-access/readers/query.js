

const readerQuery = ({ conn }) => {
    return Object.freeze({
        getAllReader,
        createReader,
        getReader,
        getreader_id,
        updateReader,
        removeReader,
        isExisting,

        checku_user_id
        // loginReader


    })
    async function getAllReader({ }) {
        try {
            const connection = await conn() //connection
            const response = await new Promise((resolve) => {
                let sql = 'SELECT * FROM "Readers" inner join "Users" on "Readers".u_user_id = "Users".user_id'
                connection.query(sql, (err, res) => {
                    connection.end()
                    if (err) resolve(err)
                    resolve(res)
                })
            })
            console.log("accessed")
            return response
        } catch (error) {
            console.log('error:', error)
        }
    }

    //create reader
    async function createReader({ u_first_name, u_last_name, date_of_birth, city, u_user_id }) {

        try {

            const connection = await conn()
            const params = [u_first_name, u_last_name, date_of_birth, city, u_user_id]
            let sql = 'INSERT INTO "Readers" ( "u_first_name", "u_last_name", "date_of_birth","city","u_user_id") VALUES ($1,$2,$3,$4,$5) returning *'
            const response = await connection.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function getReader({ id }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM "Readers" WHERE "reader_id" = $1'
            let params = [id]
            const response = await connection.query(sql, params)


            return response.rows

        } catch (error) {
            console.log('Error: ', error)

        }
    }
    async function isExisting({ u_first_name, u_last_name }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM "Readers" WHERE "u_first_name" =$1 AND "u_last_name" = $2'
            let params = [u_first_name, u_last_name]
            const response = await connection.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('error: ')
        }
    }

    async function removeReader({ id }) {
        try {
            const connect = await conn()
            let params = [id]
            const sql = 'DELETE FROM "Readers" WHERE "reader_id" = $1'
            const response = await connect.query(sql, params)
            console.log('test', response)
            return response

        } catch (error) {

            console.log("Error: ", error);
        }
    }

    async function getreader_id({ id }) {
        try {
            const connect = await conn()
            const sql = 'SELECT UserID FROM "Readers" WHERE "reader_id"=$1'
            let params = [id]
            const response = await connect.query(sql, params)
            if (response) {
                return response
            }

        } catch (error) {
            console.log('error ID')
        }
    }
    async function updateReader({ u_first_name, u_last_name, date_of_birth, city, u_user_id, id }) {




        try {
            const connect = await conn()


            const sql = 'UPDATE "Readers" SET   "u_first_name" = $1, "u_last_name" = $2, "date_of_birth" = $3, "city" = $4, "u_user_id" = $5 WHERE "reader_id" = $6 returning *'
            let params = [u_first_name, u_last_name, date_of_birth, city, u_user_id, id]
            const response = await connect.query(sql, params)

            return response.rows
        } catch (error) {
            console.log("Error: ", error);
        }

    }


    async function checku_user_id({ u_user_id }) {
        try {
            const connect = await conn()
            let params = [u_user_id]
            const sql = 'SELECT * FROM "Users" WHERE "user_id" = $1'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }

}
module.exports = readerQuery