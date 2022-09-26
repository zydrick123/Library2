const { getAllCitysUseCase, addCitysUseCase, updateCityUseCase } = require('../../use-cases/city/index')


const getAllCitys = require('./get-all-city')
const addCity = require('./add-city')
const updateCity = require('./update-city')

const getAllCitysController = getAllCitys({ getAllCitysUseCase })
const updateCityController = updateCity({ updateCityUseCase })
const addCityController = addCity({ addCitysUseCase })

const services = Object.freeze({
    getAllCitysController, addCityController, updateCityController
})

module.exports = services, { getAllCitysController, addCityController, updateCityController }