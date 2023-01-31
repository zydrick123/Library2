const updateReader = ({ data }) => {
    const { u_user_id, u_first_name, u_last_name, date_of_birth, city, id } = data;
    if (!u_user_id) {
        throw new Error('Please enter u_user_id')
    }
    if (!u_first_name) {
        throw new Error('Please enter u_first_name')
    }
    if (!u_last_name) {
        throw new Error('Please enter u_last_name')
    }
    if (!date_of_birth) {
        throw new Error('Please enter date_of_birth')
    }

    if (!city) {
        throw new Error('Please enter city')
    }
    if (!id) {

        throw new Error('Request error ID not found')
    }



    return Object.freeze({
        getu_user_id: () => u_user_id,
        getu_first_name: () => u_first_name,
        getu_last_name: () => u_last_name,
        getdate_of_birth: () => date_of_birth,
        getcity: () => city,
        getID: () => id

    })

}
module.exports = updateReader