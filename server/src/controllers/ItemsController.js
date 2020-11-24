const knex = require("../database");

module.exports = {
  async index(req, res) {
    const { search } = req.query;

    const results = await knex("items").where(
      "broken",
      1
    ); /* .where("category", "like", `%${search}%`); */

    return res.json(results);
  },

  async create(req, res, next) {
    try {
      const {
        category,
        group,
        brand,
        image,
        comments,
        origin,
        tipping,
        model,
        serial,
        weight,
        broken,
      } = req.body;

      await knex("items").insert({
        category,
        group,
        brand,
        image,
        comments,
        origin,
        tipping,
        model,
        serial,
        weight,
        broken,
      });
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("items").where({ id }).del();

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async ready(req, res, next) {
    try {
      const { search } = req.query;

      const results = await knex("items").where("broken", 0);

      return res.json(results);
    } catch (error) {
      next(error);
    }
  },
};
