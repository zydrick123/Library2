const userQuery = ({ conn, encryptPasswordService, comparePasswordService }) => {
    return Object.freeze({
        getAllUser,
        createUser,
        isExisting,
        updateUser,
        getUser,
        loginUser

    })
    async function getAllUser({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT "user_id", "username", "password", "UserID", "Roles", "Status"  FROM "Users"'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createUser({ username, password }) {
        try {
            let encryptedpwd = encryptPasswordService([password])
            const connect = await conn()

            let params = [username, encryptedpwd]

            let sql = 'INSERT INTO "Users" ("username","password") VALUES ($1,$2) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ username }) {
        try {
            const connect = await conn()

            let params = [username]
            let sql = 'SELECT * FROM "Users" WHERE "username" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateUser({ username, password, id }) {
        try {
            let encryptedpwd = encryptPasswordService([password])
            const connect = await conn()

            let params = [username, encryptedpwd, id]
            const sql = 'UPDATE "Users" SET "username"= $1 ,"password" = $2 WHERE "user_id" = $3 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getUser({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM "Users" WHERE "user_id" = $1 '
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }


    async function loginUser({ username, password }) {
        try {
            const connect = await conn()
            let params = [username]

            let result = {}

            const sql = `SELECT * FROM "Users" WHERE "username" = $1`
            const response = await connect.query(sql, params)



            if (!response) {
                return result.Status = 'no user';
            } else {
                let encryptPassword = response.rows[0].password

                let decryptpassword = comparePasswordService({ password, encryptPassword })
                if (decryptpassword) {
                    result.user_id = response.rows[0].user_id,
                        result.username = response.rows[0].username
                    result.Status = 'valid'
                    return result;
                } else {
                    return result.Status = false;
                }
            }



        } catch (e) {

            console.log(e);
        }
    }

}
module.exports = userQuery