const knex = require("../database");
const jwt = require("jsonwebtoken");

module.exports = {
  async authenticate(req, res, next) {
    const { email, password } = req.body;

    try {
      const db = await knex("users");

      const user = db.find((user) => user.password === password && user.email === email);
      const typeOfUser = user.flag;

      if (user) {
        const token = await jwt.sign({ email }, "configurar");
        return res.json({ token, user, typeOfUser });
      } else {
        return res.json("error");
      }
    } catch (error) {
      return res.json(error);
    }
  },
};
