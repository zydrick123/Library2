const cityQuery = ({ conn }) => {
    return Object.freeze({
        getAllCity,
        createCity,
        isExisting,
        updateCity,
        getCity,

    })
    async function getAllCity({ }) {
        try {

            const connect = await conn()
            let sql = 'SELECT * FROM city'
            const response = await connect.query(sql)
            return response
        } catch (error) {
            console.log('error: ', error)
        }

    }
    async function createCity({ CityName }) {
        try {
            const connect = await conn()

            let params = [CityName]
            let sql = 'INSERT INTO city ("CityName") VALUES ($1) returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function isExisting({ CityName }) {
        try {
            const connect = await conn()
            //  const { firstname, lastname } = data
            let params = [CityName]
            let sql = 'SELECT * FROM city WHERE "CityName" =$1'
            const response = await connect.query(sql, params)
            return response.rows

        } catch (error) {
            console.log('Error: ', error)
        }
    }
    async function updateCity({ CityName, id }) {
        try {
            const connect = await conn()
            let params = [CityName, id]
            const sql = 'UPDATE city SET "CityName"= $1 WHERE "CityID" = $2 returning *'
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log("Error2: ", error);
        }
    }
    async function getCity({ id }) {
        try {
            const connect = await conn()
            let sql = 'SELECT * FROM city WHERE "CityID" = $1'
            let params = [id]
            const response = await connect.query(sql, params)
            return response.rows
        } catch (error) {
            console.log('Error1: ', error)
        }
    }
    // async function removeCity({ id }) {
    //     try {
    //         const connect = await conn()
    //         const sql = 'DELETE FROM citys WHERE "CityID" = $1'
    //         let params = [id]
    //         const response = await connect.query(sql, params)
    //         return response
    //     } catch (error) {
    //         console.log("Error: ", error);
    //     }
    // }
}
module.exports = cityQuery