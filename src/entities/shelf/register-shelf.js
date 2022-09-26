const makeShelf = ({ data }) => {

    const { shelfname, location } = data;
    if (!shelfname) {
        throw new Error('Please enter shelf name')
    }
    if (!location) {
        throw new Error('Please enter location')
    }
    if (!CategoryID) {
        throw new Error('Please enter CategoryID')
    }

    return Object.freeze({
        getShelfname: () => shelfname,
        getLocation: () => location,
        getCategoryID: () => CategoryID,

    })
}
module.exports = makeShelf