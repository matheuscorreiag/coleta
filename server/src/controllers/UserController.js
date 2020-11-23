const knex = require("../database");
const bcrypt = require("bcryptjs");

module.exports = {
  async index(req, res, next) {
    try {
      const results = await knex("users").where("deleted_at", null);
      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const { name, password, email, cell, center, city, state, userType } = req.body;

      const hash = bcrypt.hashSync(password, 8);

      await knex("users").insert({
        name,
        password: hash,
        email,
        cell,
        center,
        city,
        state,
        userType,
      });
      return res.status(201).send();
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { name, password, email, cell, center, city, state, userType } = req.body;
      const { id } = req.params;
      const hash = bcrypt.hashSync(password, 8);
      await knex("users")
        .where({ id })
        .update({ name })
        .update({ password: hash })
        .update({ email })
        .update({ cell })
        .update({ center })
        .update({ city })
        .update({ state })
        .update({ userType });

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).update("deleted_at", new Date());

      return res.send();
    } catch (error) {
      next(error);
    }
  },
};
