const authorQuery = ({ conn }) => {
    return Object.freeze({
        getAllAuthor,
        createAuthor,
        isExisting,
        updateAuthor,
        getAuthor,

    })
    async function getAllAuthor({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM authors'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createAuthor({ firstname, middlename, lastname }) {
        try {
            const connect = await conn()

            let params = [firstname, middlename, lastname]
            let sql = 'INSERT INTO authors (firstname,middlename,lastname) VALUES ($1,$2,$3) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ firstname, lastname }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [firstname, lastname]
            let sql = 'SELECT * FROM authors WHERE firstname =$1 AND lastname= $2'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateAuthor({ firstname, middlename, lastname, id }) {
        try {
            const connect = await conn()
            let params = [firstname, middlename, lastname, id]
            const sql = 'UPDATE authors SET firstname = $1, middlename = $2, lastname = $3 WHERE "AuthorID" = $4 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getAuthor({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM authors WHERE "AuthorID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }

    // async function removeAuthor({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM authors WHERE "AuthorID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = authorQuery