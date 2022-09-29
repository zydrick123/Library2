const accountQuery = ({ conn, encryptPasswordService, comparePasswordService }) => {
    return Object.freeze({
        getAllAccount,
        createAccount,
        isExisting,
        updateAccount,
        getAccount,
        checkUserID,
        loginUser

    })
    async function getAllAccount({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM accounts'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createAccount({ Username, Password, UserID, Roles, Status }) {
        try {
            let encryptedpwd = encryptPasswordService([Password])
            const connect = await conn()

            let params = [Username, encryptedpwd, UserID, Roles, Status]

            let sql = 'INSERT INTO accounts ("Username","Password","UserID","Roles","Status") VALUES ($1,$2,$3,$4,$5) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ Username }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [Username]
            let sql = 'SELECT * FROM accounts WHERE "Username" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateAccount({ Username, Password, UserID, Roles, Status, id }) {
        try {
            const connect = await conn()
            let params = [Username, Password, UserID, Roles, Status, id]
            const sql = 'UPDATE accounts SET "Username"= $1 ,"Password" = $2, "UserID" = $3, "Roles" =$4, "Status" = $5  WHERE "AccountID" = $6 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getAccount({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM accounts WHERE "AccountID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }
    async function checkUserID({ UserID }) {
        try {
            const connect = await conn()
            let params = [UserID]
            const sql = 'SELECT * FROM accounts WHERE EXISTS (SELECT * FROM librarians WHERE "UserID" = $1)'
            const response = await connect.query(sql, params)
            console.log(response)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }

    async function loginUser({ Username, Password }) {
        try {
            const connect = await conn()
            let params = [Username]

            let result = {}

            const sql = `SELECT * FROM accounts WHERE "Username" = $1`
            const response = await connect.query(sql, params)

            let encryptPassword = response.rows[0].Password
            let decryptPassword = comparePasswordService({ Password, encryptPassword })

            if (decryptPassword) {
                result.AccountID = response.rows[0].AccountID,
                    result.Username = response.rows[0].Username,
                    result.Status = response.rows[0].Status;

                return result;

            } else {
                result.status = false;

                return result;
            }
        } catch (e) {
            console.log(e);
        }
    }
    // async function removeAccount({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM accounts WHERE "AccountID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = accountQuery