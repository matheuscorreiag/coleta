/* const jwt = require("jsonwebtoken");

const db = [{ email: "admin", password: "1234" }];

const authenticate = async ({ username, password }) => {
  const user = db.find((user) => user.password === password && user.username === username);

  if (user) {
    const token = await jwt.sign({ username }, "configurar");
    return { token, user };
  }
};

module.exports = {
  authenticate,
};
 */
