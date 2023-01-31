const userDB = require('../../data-access/users/index')

const { registerUser_Entity, updateUser_Entity, loginUser_Entity } = require('../../entities/users/index')

const getAllUser = require('./get-all-user')
const createUser = require('./add-user')
const updateUser = require('./update-user')
const loginUsers = require('./login-user')


//initialize
const loginUsersUseCase = loginUsers({ userDB, loginUser_Entity })
const getAllUsersUseCase = getAllUser({ userDB })
const updateUserUseCase = updateUser({ userDB, updateUser_Entity })
const addUsersUseCase = createUser({ userDB, registerUser_Entity })


const services = Object.freeze({
    getAllUsersUseCase, addUsersUseCase, updateUserUseCase, loginUsersUseCase
})


module.exports = services, { getAllUsersUseCase, addUsersUseCase, updateUserUseCase, loginUsersUseCase }