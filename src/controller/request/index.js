//this depends on use-cases 
const { getAllRequestUseCase, addRequestUseCase, updateRequestUseCase, deleteRequestUseCase, loginRequestUseCase, selectRequestUseCase } = require('../../use-cases/requests/index')

// local functions
const getAllRequests = require('./get-all-request')
const createRequest = require('./add-request')
const updateRequest = require('./update-request')
const deleteRequest = require('./delete-request')
const loginRequest = require('./login-request')
const selectRequest = require('./select-request')
//initialized
const selectRequestController = selectRequest({ selectRequestUseCase })
const loginRequestController = loginRequest({ loginRequestUseCase })
const deleteRequestController = deleteRequest({ deleteRequestUseCase })
const getAllRequestsController = getAllRequests({ getAllRequestUseCase })
const addRequestController = createRequest({ addRequestUseCase })
const updateRequestController = updateRequest({ updateRequestUseCase })
const services = Object.freeze({
    getAllRequestsController,
    addRequestController,
    updateRequestController,
    deleteRequestController,
    loginRequestController,
    selectRequestController
})

module.exports = services, {
    getAllRequestsController, addRequestController, updateRequestController, deleteRequestController,
    loginRequestController, selectRequestController
}
