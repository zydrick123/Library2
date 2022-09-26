const bookCopyQuery = ({ conn }) => {
    return Object.freeze({
        getAllBookCopy,
        createBookCopy,
        isExisting,
        updateBookCopy,
        getBookCopy,
        checkBookID,
        checkShelfID

    })
    async function getAllBookCopy({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM bookcopy'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createBookCopy({ copyNo, b_bookID, b_shelfID }) {
        try {
            const connect = await conn()

            let params = [copyNo, b_bookID, b_shelfID]
            let sql = 'INSERT INTO bookcopy ("copyNo", "b_bookID", "b_shelfID") VALUES ($1,$2,$3) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ copyNo }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [copyNo]
            let sql = 'SELECT * FROM bookcopy WHERE "copyNo" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateBookCopy({ copyNo, b_bookID, b_shelfID, id }) {
        try {
            const connect = await conn()
            let params = [copyNo, b_bookID, b_shelfID, id]
            const sql = 'UPDATE bookcopy SET "copyNo"= $1 ,"b_bookID" = $2 , "b_shelfID" = $3 WHERE "copyID" = $4 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getBookCopy({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM bookcopy WHERE "copyID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }
    async function checkBookID({ b_bookID }) {
        try {
            const connect = await conn()
            let params = [b_bookID]
            const sql = 'SELECT * FROM bookcopy WHERE EXISTS (SELECT * FROM books WHERE "bookID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkShelfID({ b_shelfID }) {
        try {
            const connect = await conn()
            let params = [b_shelfID]
            const sql = 'SELECT * FROM bookcopy WHERE EXISTS (SELECT * FROM shelf WHERE "shelfID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    // async function removeBookCopy({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM bookCopys WHERE "BookCopyID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = bookCopyQuery