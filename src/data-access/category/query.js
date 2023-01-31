const categoryQuery = ({ conn }) => {
    return Object.freeze({
        getAllCategory,
        createCategory,
        isExisting,
        updateCategory,
        getCategory,


    })
    async function getAllCategory({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM "Categories"'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createCategory({ category_id, category_name, subcategories }) {
        try {
            const connect = await conn()

            let params = [category_name, subcategories]
            let sql = 'INSERT INTO "Categories" ("category_name", "subcategories") VALUES ($1,$2) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ category_name, subcategories }) {
        try {
            const connect = await conn()
            let params = [category_name, subcategories]
            let sql = 'SELECT * FROM "Categories" WHERE "category_name" =$1 AND "subcategories" = $2'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateCategory({ category_name, subcategories, id }) {
        try {
            const connect = await conn()
            let params = [category_name, subcategories, id]
            const sql = 'UPDATE "Categories" SET "category_name" = $1 ,"subcategories" = $2 WHERE "category_id" = $3 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getCategory({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM "Categories" WHERE "category_id" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }

}
module.exports = categoryQuery