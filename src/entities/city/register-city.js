const makeCity = ({ data }) => {

    const { CityName } = data;
    if (!CityName) {
        throw new Error('Please enter City name')
    }



    return Object.freeze({
        getCityName: () => CityName,


    })
}
module.exports = makeCity