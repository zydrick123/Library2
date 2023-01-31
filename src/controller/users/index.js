const { getAllUsersUseCase, addUsersUseCase, updateUserUseCase, loginUsersUseCase } = require('../../use-cases/users/index')


const getAllUsers = require('./get-all-user')
const addUser = require('./add-user')
const updateUser = require('./update-user')
const loginUser = require('./login-user')

const loginUsersController = loginUser({ loginUsersUseCase })
const getAllUsersController = getAllUsers({ getAllUsersUseCase })
const updateUserController = updateUser({ updateUserUseCase })
const addUserController = addUser({ addUsersUseCase })

const services = Object.freeze({
    getAllUsersController, addUserController, updateUserController, loginUsersController
})

module.exports = services, { getAllUsersController, addUserController, updateUserController, loginUsersController }