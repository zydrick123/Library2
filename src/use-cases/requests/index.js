const requestDB = require('../../data-access/requests/index')
const {
    registerRequest_Entity,
    updateRequest_Entity,


} = require('../../entities/requests/index')

//local functions
const getAllRequest = require('./get-allRequest')
const createRequest = require('./insert-request')
const updateRequest = require('./update-request')
const deleteRequest = require('./delete-request')
const updatestatus = require('./updatestatus')
const selectRequest = require('./select-request')

//initialize use cases sections

const deleteRequestUseCase = deleteRequest({ requestDB })
const getAllRequestUseCase = getAllRequest({ requestDB })
const selectRequestUseCase = selectRequest({ requestDB })
const addRequestUseCase = createRequest({ requestDB, registerRequest_Entity })
const updateRequestUseCase = updateRequest({ requestDB, updateRequest_Entity })
const updatestatusUseCase = updatestatus({ requestDB })
//Export interfaces
const services = Object.freeze({
    selectRequestUseCase, getAllRequestUseCase, addRequestUseCase, updateRequestUseCase, deleteRequestUseCase, updatestatusUseCase
})

module.exports = services
module.exports = { selectRequestUseCase, getAllRequestUseCase, addRequestUseCase, updateRequestUseCase, deleteRequestUseCase, updatestatusUseCase }
