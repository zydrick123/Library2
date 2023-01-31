const updateLibrarian = ({ data }) => {
    const { first_name, last_name, u_user_id, id } = data;
    if (!first_name) {
        throw new Error('Please enter username')
    }
    if (!last_name) {
        throw new Error('Please enter last_name')
    }
    if (!u_user_id) {
        throw new Error('Please enter user id')
    }
    if (!id) {

        throw new Error('Request error ID not found')
    }
    return Object.freeze({
        getfirst_name: () => first_name,
        getlast_name: () => last_name,
        getu_user_id: () => u_user_id,
        getID: () => id
    })

}
module.exports = updateLibrarian