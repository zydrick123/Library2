const updateBookCat = ({ data }) => {
    const { categoryName, b_subcategoryID, id } = data;


    if (!categoryName) {
        throw new Error('Please enter Book category name')
    }

    if (!b_subcategoryID) {
        throw new Error('Please enter Book category id')
    }


    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({
        getName: () => categoryName,
        getSubID: () => b_subcategoryID,
        getID: () => id,
    })

}
module.exports = updateBookCat