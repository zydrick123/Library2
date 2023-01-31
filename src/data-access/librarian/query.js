

const librarianQuery = ({ conn }) => {
    return Object.freeze({
        getAllLibrarian,
        createLibrarian,
        getLibrarian,
        getLibrarianID,
        updateLibrarian,
        removeLibrarian,
        isExisting,
        checku_user_id
        // loginLibrarian


    })
    async function getAllLibrarian({ }) {
        try {
            const connection = await conn() //connection
            let sql = 'SELECT *FROM "Librarians" INNER JOIN "Users" ON "Librarians".u_user_id = "Users".user_id'
            const response = await connection.query(sql)
            return response




        } catch (error) {
            console.log('error:', error)
        }
    }

    //create librarian
    async function createLibrarian({ first_name, last_name, u_user_id }) {

        try {
            const connection = await conn()
            const params = [first_name, last_name, u_user_id]
            let sql = 'INSERT INTO "Librarians" ("first_name", "last_name", "u_user_id") VALUES ($1,$2,$3) returning *'
            const response = await connection.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function getLibrarian({ id }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM "Librarians" WHERE "librarian_id" = $1'
            let params = [id]
            const response = await connection.query(sql, params)


            return response

        } catch (error) {
            console.log('Error: ', error)

        }
    }
    async function isExisting({ first_name, last_name }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM "Librarians" WHERE "first_name" = $1 AND "last_name" = $2'
            let params = [first_name, last_name]
            const response = await connection.query(sql, params)

            return response.rows

        } catch (error) {
            console.log()
            console.log('error: ')
        }
    }

    async function removeLibrarian({ id }) {
        try {
            const connect = await conn()
            let params = [id]
            const sql = 'DELETE FROM "Librarians" WHERE "u_user_id" = $1'
            const response = await connect.query(sql, params)
            console.log('test', response)
            return response

        } catch (error) {

            console.log("Error: ", error);
        }
    }

    async function getLibrarianID({ id }) {
        try {
            const connect = await conn()
            const sql = 'SELECT * FROM "Librarians" WHERE "librarian_id" = $1'
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
    async function updateLibrarian({ first_name, last_name, u_user_id, id }) {

        try {
            const connect = await conn()

            let params = [first_name, last_name, u_user_id, id]
            const sql = 'UPDATE "Librarians" SET "first_name" = $1,"last_name" = $2,"u_user_id" = $3  WHERE "librarian_id" = $4 returning *'

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
module.exports = librarianQuery