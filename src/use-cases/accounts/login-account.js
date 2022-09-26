const jwt = require('../../helpers/jwt')
const loginAccount = ({ accountDB, loginAccount_Entity }) => {
  return async function list(data) {

    let entity = await loginAccount_Entity({ data });
    let token = "";

    const res = await accountDB.loginUser({
      Username: entity.getUsername(),
      Password: entity.getPassword(),



    })

    if (res == null) {
      throw new Error("Network error")
    } else {
      const { AccountID, Username, Status } = res

      if (Status) {
        if (Status == "inactive") {

          throw new Error("Account is inactive failed to login!")

        } else {

          token = jwt.issue({ Username: Username }, '1d')

          return {
            message: "Successfully logged in",
            AccountID: AccountID,
            Username: Username,
            token: token
          }

        }
      }
      else if (!Status) {
        throw new Error("Credentials did not match")
      }
      else {
        throw new Error("Network error")
      }
    }
  };
};

module.exports = loginAccount;