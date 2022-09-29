const { getAllCitysController, addCityController, updateCityController } = require('../../controller/city/index')

const cityRoutes = ({ cityRouter, makeExpressCallback }) => {
    cityRouter.get('/api/city', makeExpressCallback(getAllCitysController))
        .post('/api/city', makeExpressCallback(addCityController))
        .patch('/api/city/:id', makeExpressCallback(updateCityController))
    return cityRouter
}
module.exports = cityRoutes