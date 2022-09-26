const createCity = ({ cityDB, registerCity_Entity }) => {
    return async function add(data) {

        let entity = await registerCity_Entity({ data })

        const isExistings = await cityDB.isExisting({
            CityName: entity.getCityName(),

        })
        // console.log(isExistings)
        if (isExistings.length > 0) {
            throw new Error('City Exist')
        }

        const res = await cityDB.createCity({
            CityName: entity.getCityName(),

        })


        if (res) {
            return {
                message: 'City registered successful',
                CityName: res[0].CityName,


            }
        }
        // throw new Error('failed')

    }
}
module.exports = createCity