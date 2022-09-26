const bookCopyDB = require('../../data-access/bookcopy/index')

const { registerBookCopy_Entity, updateBookCopy_Entity } = require('../../entities/bookcopy/index')

const getAllBookCopy = require('./get-all-bookcopy')
const createBookCopy = require('./add-bookcopy')
const updateBookCopy = require('./update-bookcopy')


//initialize
const getAllBookCopysUseCase = getAllBookCopy({ bookCopyDB })
const updateBookCopyUseCase = updateBookCopy({ bookCopyDB, updateBookCopy_Entity })
const addBookCopysUseCase = createBookCopy({ bookCopyDB, registerBookCopy_Entity })


const services = Object.freeze({
    getAllBookCopysUseCase, addBookCopysUseCase, updateBookCopyUseCase
})


module.exports = services, { getAllBookCopysUseCase, addBookCopysUseCase, updateBookCopyUseCase }