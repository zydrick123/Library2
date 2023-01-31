const publisherQuery = ({ conn }) => {
    return Object.freeze({
        getAllPublisher,
        createPublisher,
        isExisting,
        updatePublisher,
        getPublisher,

    })
    async function getAllPublisher({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM "Publishers"'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createPublisher({ publisher_name, location }) {
        try {
            const connect = await conn()

            let params = [publisher_name, location]
            let sql = 'INSERT INTO "Publishers" ( "publisher_name", "location") VALUES ($1,$2) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ publisher_name }) {
        try {
            const connect = await conn()
            //  const { publisher_name, lastname } = data
            let params = [publisher_name]
            let sql = 'SELECT * FROM "Publishers" WHERE "publisher_name" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updatePublisher({ publisher_name, location, id }) {
        try {
            const connect = await conn()
            let params = [publisher_name, location, id]
            const sql = 'UPDATE "Publishers" SET "publisher_name" = $1, "location" = $2 WHERE "publisher_id" = $3 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getPublisher({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM "Publishers" WHERE "publisher_id" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }

}
module.exports = publisherQuery