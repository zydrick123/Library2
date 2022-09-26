const { getAllBookCopysUseCase, addBookCopysUseCase, updateBookCopyUseCase } = require('../../use-cases/bookcopy/index')


const getAllBookCopys = require('./get-all-bookcopy')
const addBookCopy = require('./add-bookcopy')
const updateBookCopy = require('./update-bookcopy')

const getAllBookCopysController = getAllBookCopys({ getAllBookCopysUseCase })
const updateBookCopyController = updateBookCopy({ updateBookCopyUseCase })
const addBookCopyController = addBookCopy({ addBookCopysUseCase })

const services = Object.freeze({
    getAllBookCopysController, addBookCopyController, updateBookCopyController
})

module.exports = services, { getAllBookCopysController, addBookCopyController, updateBookCopyController }