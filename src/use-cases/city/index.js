const cityDB = require('../../data-access/city/index')

const { registerCity_Entity, updateCity_Entity } = require('../../entities/city/index')

const getAllCity = require('./get-all-city')
const createCity = require('./add-city')
const updateCity = require('./update-city')


//initialize
const getAllCitysUseCase = getAllCity({ cityDB })
const updateCityUseCase = updateCity({ cityDB, updateCity_Entity })
const addCitysUseCase = createCity({ cityDB, registerCity_Entity })


const services = Object.freeze({
    getAllCitysUseCase, addCitysUseCase, updateCityUseCase
})


module.exports = services, { getAllCitysUseCase, addCitysUseCase, updateCityUseCase }