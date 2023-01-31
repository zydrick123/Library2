const updateCategory = ({ data }) => {
    const { category_name, subcategories, id } = data;


    if (!category_name) {
        throw new Error('Please enter Book category name')
    }

    if (!subcategories) {
        throw new Error('Please enter Book subcategories')
    }


    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({
        getName: () => category_name,
        getSubcategories: () => subcategories,
        getID: () => id,
    })

}
module.exports = updateCategory