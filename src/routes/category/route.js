const { getAllCategorysController, addCategoryController, updateCategoryController } = require('../../controller/category/index')
const passport = require('passport')
const categoryRoutes = ({ categoryRouter, makeExpressCallback }) => {
    categoryRouter.get('/api/category', makeExpressCallback(getAllCategorysController))
        .post('/api/category', makeExpressCallback(addCategoryController))
        .patch('/api/category/:id', makeExpressCallback(updateCategoryController))
    return categoryRouter
}
module.exports = categoryRoutes