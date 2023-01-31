const jwt = require('../../helpers/jwt')
const loginUsers = ({ userDB, loginUser_Entity }) => {
  return async function list(data) {

    let entity = await loginUser_Entity({ data });
    let token = "";

    const res = await userDB.loginUser({
      username: entity.getusername(),
      password: entity.getpassword(),

    })



    if (!res) {
      throw new Error("Invalid Credentials")
    }
    const { username, Status } = res
    if (Status === "valid") {
      token = jwt.issue({ username: username }, '1d')

      return {
        message: "Successfully logged in",
        Status: Status,
        username: username,
        token: token
      }

    }


  };
};

module.exports = loginUsers;