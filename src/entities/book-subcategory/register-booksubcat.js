const makeBookSubCat = ({ data }) => {

    const { name } = data;
    if (!name) {
        throw new Error('Please enter Book subcategory name')
    }



    return Object.freeze({
        getName: () => name,


    })
}
module.exports = makeBookSubCat