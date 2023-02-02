const categoryQuery = ({ conn }) => {
    return Object.freeze({
        getAllCategory,
        createCategory,
        isExisting,
        updateCategory,
        getCategory,
        updatestatus

    })
    async function getAllCategory({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM "Categories" order by "category_name" asc'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createCategory({ category_name, subcategories }) {
        try {
            const connect = await conn()

            let params = [category_name, subcategories, 'active']
            let sql = 'INSERT INTO "Categories" ("category_name", "subcategories","c_status") VALUES ($1,$2,$3) returning *'
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
            let params = [category_name, subcategories, id, 'active']
            const sql = 'UPDATE "Categories" SET "category_name" = $1 ,"subcategories" = $2 ,"c_status" = $4 WHERE "category_id" = $3 returning *'
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
    async function updatestatus({ id }) {
        try {
            const connect = await conn()
            let params = ["inactive", id]
            const sql = 'Update "Categories" Set "c_status" = $1  where "category_id" = $2'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
}
module.exports = categoryQuery