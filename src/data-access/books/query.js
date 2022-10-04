const bookQuery = ({ conn }) => {
    return Object.freeze({
        getAllBook,
        createBook,
        isExisting,
        updateBook,
        getBook,
        checkAuthorID,
        checkPublisherID,


    })
    async function getAllBook({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM books'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createBook({ ISBN, Title, YearPublish, AuthorID, PageNo, PublisherID }) {
        try {
            const connect = await conn()

            let params = [ISBN, Title, YearPublish, AuthorID, PageNo, PublisherID]
            let sql = 'INSERT INTO books ( "ISBN","Title","YearPublish","AuthorID","PageNo","PublisherID") VALUES ($1,$2,$3,$4,$5,$6) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ Title }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [Title]
            let sql = 'SELECT * FROM books WHERE "Title" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateBook({ ISBN, Title, YearPublish, AuthorID, PageNo, PublisherID, id }) {
        try {
            const connect = await conn()
            let params = [ISBN, Title, YearPublish, AuthorID, PageNo, PublisherID, id]
            const sql = 'UPDATE books SET "ISBN"= $1, "Title"= $2, "YearPublish"= $3, "AuthorID" = $4, "PageNo" = $5, "PublisherID" = $6 WHERE "bookID" = $7 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getBook({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM books WHERE "bookID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }

    async function checkAuthorID({ AuthorID }) {
        try {
            const connect = await conn()
            let params = [AuthorID]
            const sql = 'SELECT * FROM books WHERE EXISTS (SELECT * FROM authors WHERE "AuthorID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkPublisherID({ PublisherID }) {
        try {
            const connect = await conn()
            let params = [PublisherID]
            const sql = 'SELECT * FROM books WHERE EXISTS (SELECT * FROM publishers WHERE "publisherID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }

    // async function removeBook({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM books WHERE "BookID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = bookQuery