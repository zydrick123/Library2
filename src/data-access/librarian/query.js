

const librarianQuery = ({ conn }) => {
    return Object.freeze({
        getAllLibrarian,
        createLibrarian,
        getLibrarian,
        getLibrarianID,
        updateLibrarian,
        removeLibrarian,
        isExisting,
        // loginLibrarian


    })
    async function getAllLibrarian({ }) {
        try {
            const connection = await conn() //connection
            const response = await new Promise((resolve) => {
                let sql = 'SELECT * FROM librarians ORDER BY "UserID" DESC'
                connection.query(sql, (err, res) => {
                    connection.end()
                    if (err) resolve(err)
                    resolve(res)
                })
            })

            return response
        } catch (error) {
            console.log('error:', error)
        }
    }

    //create librarian
    async function createLibrarian({ Firstname, Middlename, Lastname, Gender, RegisterDate }) {

        try {
            // let encryptedpwd = encryptPasswordService([password])
            // console.log(firstname, middlename, lastname, gender)

            const connection = await conn()



            const params = [Firstname, Middlename, Lastname, Gender, RegisterDate]
            let sql = 'INSERT INTO librarians ("Firstname", "Middlename", "Lastname", "Gender", "RegisterDate") VALUES ($1,$2,$3,$4,$5) returning *'
            // const { firstname, middlename, lastname, gender } = makeLibrarian


            const response = await connection.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function getLibrarian({ id }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM librarians WHERE "UserID" = $1'
            let params = [id]
            const response = await connection.query(sql, params)


            return response

        } catch (error) {
            console.log('Error: ', error)

        }
    }
    async function isExisting({ Firstname, Lastname }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM librarians WHERE "Firstname" = $1 AND "Lastname" = $2'
            let params = [Firstname, Lastname]
            const response = await connection.query(sql, params)

            return response.rows

        } catch (error) {
            console.log()
            console.log('error: ')
        }
    }

    async function removeLibrarian({ id }) {
        try {
            const connect = await conn()
            let params = [id]
            const sql = 'DELETE FROM librarians WHERE "UserID" = $1'
            const response = await connect.query(sql, params)
            console.log('test', response)
            return response

        } catch (error) {

            console.log("Error: ", error);
        }
    }

    async function getLibrarianID({ id }) {
        try {
            const connect = await conn()
            const sql = 'SELECT * FROM librarians WHERE "UserID"=$1'
            let params = [id]
            console.log(id)
            const response = await connect.query(sql, params)
            if (response) {
                return response
            }

        } catch (error) {
            console.log('error ID')
        }
    }
    async function updateLibrarian({ Firstname, Middlename, Lastname, Gender, id }) {




        try {
            const connect = await conn()


            const sql = 'UPDATE librarians SET "Firstname" = $1,"Middlename" = $2,"Lastname" = $3, "Gender" = $4  WHERE "UserID" = $5 returning *'
            let params = [Firstname, Middlename, Lastname, Gender, id]
            const response = await connect.query(sql, params)
            // console.log(response)

            return response.rows
        } catch (error) {
            console.log("Error: ", error);
        }

    }

    // async function loginLibrarian({ username, password }) {
    //     try {
    //         const connect = await conn()
    //         let result = {}
    //         let params = [username]
    //         let sql = 'SELECT id, username, password FROM librarians WHERE username = $1'
    //         const response = await connect.query(sql, params)

    //         return response
    //         // if (response.rows == 0) { console.log('invalid credentials') }


    //         // let encryptPassword = response.rows[0].password

    //         // let decryptPassword = await comparePasswordService({ password, encryptPassword })

    //         // if (decryptPassword) {
    //         //     result.password = response.rows[0].password
    //         //     return response

    //         // }



    //     } catch (error) {
    //         console.log("Error: ", error);

    //     }
    // }
}
module.exports = librarianQuery