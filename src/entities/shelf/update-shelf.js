const updateShelf = ({ data }) => {
    const { shelfname, location, id } = data;


    if (!shelfname) {
        throw new Error('Please enter firstname')
    }
    if (!location) {
        throw new Error('Please  a')
    }

    if (!id) {

        throw new Error('Request error ID not found')
    }
    if (!CategoryID) {
        throw new Error('Please enter CategoryID')
    }



    return Object.freeze({

        getShelfname: () => shelfname,
        getLocation: () => location,
        getCategoryID: () => CategoryID,
        getID: () => id
    })

}
module.exports = updateShelf