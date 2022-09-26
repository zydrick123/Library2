const updateCity = ({ data }) => {
    const { CityName, id } = data;


    if (!CityName) {
        throw new Error('Please enter City name')
    }



    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({

        getCityName: () => CityName,


        getID: () => id
    })

}
module.exports = updateCity