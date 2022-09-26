const updateBookSubCat = ({ data }) => {
    const { name, id } = data;


    if (!name) {
        throw new Error('Please enter Book subcategory name')
    }



    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({

        getName: () => name,


        getID: () => id
    })

}
module.exports = updateBookSubCat