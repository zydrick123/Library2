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
            let sql = 'SELECT * FROM publishers'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createPublisher({ firstname, middlename, lastname, location }) {
        try {
            const connect = await conn()

            let params = [firstname, middlename, lastname, location]
            let sql = 'INSERT INTO publishers ( "Firstname", "Middlename", "Lastname", "Location") VALUES ($1,$2,$3,$4) returning *'
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
            let sql = 'SELECT * FROM publishers WHERE "Firstname" =$1 AND "Lastname"= $2'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updatePublisher({ firstname, middlename, lastname, location, id }) {
        try {
            const connect = await conn()
            let params = [firstname, middlename, lastname, location, id]
            const sql = 'UPDATE publishers SET "Firstname" = $1, "Middlename"= $2, "Lastname" = $3 , "Location" = $4 WHERE "publisherID" = $5 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getPublisher({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM publishers WHERE "publisherID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }
    // async function removePublisher({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM publishers WHERE "PublisherID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = publisherQuery