const accountLogin = ({ data }) => {
  // return function make({fullname, contact, address} = {}) {

  const { Username, Password } = data;
  if (!Username) {
    throw new Error("Please enter Username");
  }
  if (!Password) {
    throw new Error("Please enter Password");
  }

  return Object.freeze({
    getUsername: () => Username,
    getPassword: () => Password,
  });

};

module.exports = accountLogin;
