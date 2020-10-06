const knex = require("../database");

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
      const { name, password, email, cell, center, city, state, flag } = req.body;

      await knex("users").insert({
        name,
        password,
        email,
        cell,
        center,
        city,
        state,
        flag,
      });
      return res.status(201).send();
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { name, password, email, cell, center, city, state } = req.body;
      const { id } = req.params;

      await knex("users")
        .where({ id })
        .update({ name })
        .update({ password })
        .update({ email })
        .update({ cell })
        .update({ center })
        .update({ city })
        .update({ state });

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
