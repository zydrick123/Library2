

const readerQuery = ({ conn }) => {
    return Object.freeze({
        getAllReader,
        createReader,
        getReader,
        getReaderID,
        updateReader,
        removeReader,
        isExisting,
        checkCityID,
        checkLibrarianID
        // loginReader


    })
    async function getAllReader({ }) {
        try {
            const connection = await conn() //connection
            const response = await new Promise((resolve) => {
                let sql = 'SELECT * FROM readers ORDER BY "ReaderID" DESC'
                connection.query(sql, (err, res) => {
                    connection.end()
                    if (err) resolve(err)
                    resolve(res)
                })
            })
            console.log("accessed")
            return response
        } catch (error) {
            console.log('error:', error)
        }
    }

    //create reader
    async function createReader({ ReaderNo, Firstname, Lastname, Birthdate, Gender, RegisterDate, ContactNo, Status, CityID, LibrarianID }) {

        try {
            // let encryptedpwd = encryptPasswordService([password])
            // console.log(firstname, middlename, lastname, gender)

            const connection = await conn()



            const params = [ReaderNo, Firstname, Lastname, Birthdate, Gender, RegisterDate, ContactNo, Status, CityID, LibrarianID]
            let sql = 'INSERT INTO readers ( "ReaderNo", "Firstname", "Lastname", "Birthdate","Gender", "RegisterDate","ContactNo","Status","CityID","LibrarianID") VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *'
            // const { firstname, middlename, lastname, gender } = makeReader


            const response = await connection.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function getReader({ id }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM readers WHERE "ReaderID" = $1'
            let params = [id]
            const response = await connection.query(sql, params)
            if (!response.rows) {
                response = 'no existing account'
            }

            return response

        } catch (error) {
            console.log('Error: ', error)

        }
    }
    async function isExisting({ Firstname, Lastname }) {
        try {
            const connection = await conn()
            let sql = 'SELECT * FROM readers WHERE "Firstname" =$1 AND "Lastname" = $2'
            let params = [Firstname, Lastname]
            const response = await connection.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('error: ')
        }
    }

    async function removeReader({ id }) {
        try {
            const connect = await conn()
            let params = [id]
            const sql = 'DELETE FROM readers WHERE "ReaderID" = $1'
            const response = await connect.query(sql, params)
            console.log('test', response)
            return response

        } catch (error) {

            console.log("Error: ", error);
        }
    }

    async function getReaderID({ id }) {
        try {
            const connect = await conn()
            const sql = 'SELECT UserID FROM readers WHERE "ReaderID"=$1'
            let params = [id]
            const response = await connect.query(sql, params)
            if (response) {
                return response
            }

        } catch (error) {
            console.log('error ID')
        }
    }
    async function updateReader({ ReaderNo, Firstname, Lastname, Birthdate, Gender, RegisterDate, ContactNo, Status, CityID, LibrarianID, id }) {




        try {
            const connect = await conn()


            const sql = 'UPDATE readers SET  "ReaderNo" = $1, "Firstname" = $2, "Lastname" = $3, "Birthdate" = $4,"Gender" = $5, "RegisterDate" = $6, "ContactNo" = $7,"Status" = $8,"CityID" = $9, "LibrarianID" = $10 WHERE "ReaderID" = $10 returning *'
            let params = [ReaderNo, Firstname, Lastname, Birthdate, Gender, RegisterDate, ContactNo, Status, CityID, LibrarianID, id]
            const response = await connect.query(sql, params)
            // console.log(response)

            return response.rows
        } catch (error) {
            console.log("Error: ", error);
        }

    }

    async function checkCityID({ CityID }) {
        try {
            const connect = await conn()
            let params = [CityID]
            const sql = 'SELECT * FROM readers WHERE EXISTS (SELECT * FROM city WHERE "CityID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function checkLibrarianID({ LibrarianID }) {
        try {
            const connect = await conn()
            let params = [LibrarianID]
            const sql = 'SELECT * FROM readers WHERE EXISTS (SELECT * FROM librarians WHERE "UserID" = $1)'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }


    // async function loginReader({ username, password }) {
    //     try {
    //         const connect = await conn()
    //         let result = {}
    //         let params = [username]
    //         let sql = 'SELECT id, username, password FROM readers WHERE username = $1'
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
module.exports = readerQuery