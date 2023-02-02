const { getAllCategorysController, addCategoryController, updateCategoryController, updatestatusController } = require('../../controller/category/index')
const passport = require('passport')
const categoryRoutes = ({ categoryRouter, makeExpressCallback }) => {
    categoryRouter.get('/api/category', makeExpressCallback(getAllCategorysController))
        .post('/api/category', makeExpressCallback(addCategoryController))
        .patch('/api/category/:id', makeExpressCallback(updateCategoryController))
        .patch('/api/category/delete/:id', passport.authenticate('jwt', { session: false }), makeExpressCallback(updatestatusController))
    return categoryRouter
}
module.exports = categoryRoutes