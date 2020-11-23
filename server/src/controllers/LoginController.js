const knex = require("../database");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

module.exports = {
  async authenticate(req, res, next) {
    const { email, password } = req.body;

    try {
      const user = await knex("users").where("email", email);

      if (!(await bcrypt.compare(password, user[0].password))) {
        alert("Usuário ou senha incorreto");
      }
      //const user = db.find((user) => compare && user.email === email);

      const typeOfUser = user[0].userType;

      if (user) {
        const token = await jwt.sign({ email }, "configurar");
        return res.json({ token, user: user[0], typeOfUser });
      } else {
        return res.json("error");
      }
    } catch (error) {
      return res.json(error);
    }
  },
};
