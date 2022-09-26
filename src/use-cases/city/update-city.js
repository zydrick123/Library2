const updateCity = ({ cityDB, updateCity_Entity }) => {
    return async function patch(data) {
        const { id } = data;
        let prevData = await cityDB.getCity({ id })

        if (prevData.length === 0) { throw new Error('no id found') }
        let entity = await updateCity_Entity({ data })

        const res = await cityDB.updateCity({
            CityName: entity.getCityName(),
            id: entity.getID(),
        })
        if (res === 0) { throw new Error('Failed to update City') }
        return {
            message: 'City Updated'
        }
    }

}
module.exports = updateCity