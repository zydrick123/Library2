const makeLibrarian = ({ data }) => {

    const { first_name, last_name, u_user_id } = data;
    if (!first_name) {
        throw new Error('Please enter firstname')
    }
    if (!last_name) {
        throw new Error('Please enter last_name')
    }
    if (!u_user_id) {
        throw new Error('Please enter user id')
    }
    return Object.freeze({
        getfirst_name: () => first_name,
        getlast_name: () => last_name,
        getu_user_id: () => u_user_id,
    })
}
module.exports = makeLibrarian