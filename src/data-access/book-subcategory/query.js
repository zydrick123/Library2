const bookSubCatQuery = ({ conn }) => {
    return Object.freeze({
        getAllBookSubCat,
        createBookSubCat,
        isExisting,
        updateBookSubCat,
        getBookSubCat,

    })
    async function getAllBookSubCat({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM book_subcategory'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createBookSubCat({ name }) {
        try {
            const connect = await conn()

            let params = [name]
            let sql = 'INSERT INTO book_subcategory (name) VALUES ($1) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ name }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [name]
            let sql = 'SELECT * FROM book_subcategory WHERE name =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateBookSubCat({ name, id }) {
        try {
            const connect = await conn()
            let params = [name, id]
            const sql = 'UPDATE book_subcategory SET name= $1 WHERE "subcategoryID" = $2 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getBookSubCat({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM book_subcategory WHERE "subcategoryID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }
    // async function removeBookSubCat({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM bookSubCats WHERE "BookSubCatID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = bookSubCatQuery