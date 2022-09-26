const makeAccount = ({ data }) => {

    const { Username, Password, UserID, Roles, Status } = data;
    if (!Username) {
        throw new Error('Please enter Username')
    }
    if (!Password) {
        throw new Error('Please enter Password')
    }
    if (!UserID) {
        throw new Error('Please enter UserID')
    }
    if (!Roles) {
        throw new Error('Please enter Roles')
    }
    if (!Status) {
        throw new Error('Please enter Status')
    }



    return Object.freeze({
        getUsername: () => Username,
        getPassword: () => Password,
        getUserID: () => UserID,
        getRoles: () => Roles,
        getStatus: () => Status


    })
}
module.exports = makeAccount