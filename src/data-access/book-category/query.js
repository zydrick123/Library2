const bookCatQuery = ({ conn }) => {
    return Object.freeze({
        getAllBookCat,
        createBookCat,
        isExisting,
        updateBookCat,
        getBookCat,
        checkSubID

    })
    async function getAllBookCat({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM book_category'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createBookCat({ b_subcategoryID, categoryName }) {
        try {
            const connect = await conn()

            let params = [b_subcategoryID, categoryName]
            let sql = 'INSERT INTO book_category ("b_subcategoryID","categoryName") VALUES ($1,$2) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ categoryName }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [categoryName]
            let sql = 'SELECT * FROM book_category WHERE "categoryName" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateBookCat({ b_subcategoryID, categoryName, id }) {
        try {
            const connect = await conn()
            let params = [b_subcategoryID, categoryName, id]
            const sql = 'UPDATE book_category SET "b_subcategoryID"= $1 ,"categoryName" = $2  WHERE "categoryID" = $3 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getBookCat({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM book_category WHERE "categoryID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }
    async function checkSubID({ b_subcategoryID }) {
        try {
            const connect = await conn()
            let params = [b_subcategoryID]
            const sql = 'SELECT * FROM book_category WHERE EXISTS (SELECT * FROM book_subcategory WHERE "subcategoryID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    // async function removeBookCat({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM bookCats WHERE "BookCatID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = bookCatQuery