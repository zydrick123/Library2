const makeCategory = ({ data }) => {

    const { category_name, subcategories } = data;
    if (!category_name) {
        throw new Error('Please enter Book category name')
    }
    if (!subcategories) {
        throw new Error('Please enter Book sub category id')
    }


    return Object.freeze({
        getName: () => category_name,
        getSubcategories: () => subcategories,



    })
}
module.exports = makeCategory