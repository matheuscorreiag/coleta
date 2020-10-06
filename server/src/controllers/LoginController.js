const knex = require("../database");
const jwt = require("jsonwebtoken");

module.exports = {
  async authenticate(req, res, next) {
    const { email, password } = req.body;

    try {
      const db = await knex("users");

      const user = db.find((user) => user.password === password && user.email === email);

      if (user) {
        const token = await jwt.sign({ email }, "configurar");
        return res.json({ token, user });
      } else {
        return res.json("error");
      }
    } catch (error) {
      return res.json(error);
    }
  },
};
/* const service = require("../services/login.service");

class LoginController {
  constructor(loginService) {
    this.loginService = loginService;
  }
  login = (req, res) => {
    this.loginService
      .authenticate(req.body)
      .then((user) => (user ? res.json(user) : res.status(400)));
  };
}

module.exports = new LoginController(service);
 */
