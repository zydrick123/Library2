const getAllCity = ({ cityDB }) => {
    return async function list() {
        let cityList = []

        const result = await cityDB.getAllCity({})
        for (let data of result.rows) {

            const dataValue = {}
            dataValue.CityID = data.CityID
            dataValue.CityName = data.CityName



            cityList.push(dataValue)

        }

        console.log('use-cases triggered', cityList)

        return cityList
    }

}
module.exports = getAllCity