const bookQuery = ({ conn }) => {
    return Object.freeze({
        getAllBook,
        createBook,
        isExisting,
        updateBook,
        getBook,
        checkp_publisher_id,
        checkc_category_id

    })
    async function getAllBook({ }) {
        try {

            const connect = await conn()
            // let sql = 'SELECT * FROM "Books" INNER JOIN "Publishers" on "Books".p_publisher_id = "Publishers".publisher_id inner join "Categories" on "Books".c_category_id = "Categories".category_id'
          let sql = 'SELECT * FROM "Books" INNER JOIN "Publishers" on "Books".p_publisher_id = "Publishers".publisher_id inner join "Categories" on "Books".c_category_id = "Categories".category_id'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createBook({ isbn, title, publication_year, author, no_of_pages, p_publisher_id, no_of_copies, shelf, c_category_id }) {
        try {
            const connect = await conn()

            let params = [isbn, title, publication_year, author, no_of_pages, p_publisher_id, no_of_copies, shelf, c_category_id]
            let sql = 'INSERT INTO "Books" ( "isbn","title","publication_year","author","no_of_pages","p_publisher_id", "no_of_copies","shelf","c_category_id" ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ title }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [title]
            let sql = 'SELECT * FROM "Books" WHERE "title" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateBook({ title, publication_year, author, no_of_pages, p_publisher_id, no_of_copies, shelf, c_category_id, id }) {
        try {
            const connect = await conn()
            let params = [title, publication_year, author, no_of_pages, p_publisher_id, no_of_copies, shelf, c_category_id, id]
            const sql = 'UPDATE "Books" SET  "title"= $1, "publication_year"= $2, "author" = $3, "no_of_pages" = $4, "p_publisher_id" = $5 , "no_of_copies" = $6,"shelf" = $7, "c_category_id" = $8 WHERE "isbn"= $9 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getBook({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM "Books" WHERE "isbn" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }

    async function checkp_publisher_id({ p_publisher_id }) {
        try {
            const connect = await conn()
            let params = [p_publisher_id]
            const sql = 'SELECT * FROM "Publishers" WHERE "publisher_id" = $1'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkc_category_id({ c_category_id }) {
        try {
            const connect = await conn()
            let params = [c_category_id]
            const sql = 'SELECT * FROM "Categories" WHERE "category_id" = $1'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }

}
module.exports = bookQuery