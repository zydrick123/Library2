const shelfQuery = ({ conn }) => {
    return Object.freeze({
        getAllShelf,
        getShelf,
        createShelf,
        updateShelf,
        isExisting,
        checkCategoryID
    })
    async function getAllShelf({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM shelf'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createShelf({ shelfname, location, CategoryID }) {
        try {
            const connect = await conn()

            let params = [shelfname, location, CategoryID]
            let sql = 'INSERT INTO shelf (shelfname, location,"CategoryID" ) VALUES ($1,$2,$3) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ shelfname, location }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [shelfname, location]
            let sql = 'SELECT * FROM shelf WHERE shelfname =$1 AND location= $2'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateShelf({ shelfname, location, CategoryID, id }) {
        try {
            const connect = await conn()
            let params = [shelfname, location, CategoryID, id]
            const sql = 'UPDATE shelf SET shelfname = $1, location = $2 , "CategoryID" = $3, WHERE "shelfID" = $4 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getShelf({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM shelf WHERE "shelfID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }
    async function checkCategoryID({ CategoryID }) {
        try {
            const connect = await conn()
            let params = [CategoryID]
            const sql = 'SELECT * FROM shelf WHERE EXISTS (SELECT * FROM book_category WHERE "categoryID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
}
module.exports = shelfQuery