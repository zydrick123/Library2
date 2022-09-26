const makeBookCat = ({ data }) => {

    const { categoryName, b_subcategoryID, subcategoryID } = data;
    if (!categoryName) {
        throw new Error('Please enter Book category name')
    }
    if (!b_subcategoryID) {
        throw new Error('Please enter Book sub category id')
    }


    return Object.freeze({
        getName: () => categoryName,
        getSubID: () => b_subcategoryID,
        getCheckSub: () => subcategoryID


    })
}
module.exports = makeBookCat