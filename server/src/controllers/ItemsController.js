const knex = require("../database");

module.exports = {
  async index(req, res) {
    const { search } = req.query;

    const results = await knex("items").where(
      "description",
      "like",
      `%${search}%`
    );

    return res.json(results);
  },

  async create(req, res, next) {
    try {
      const { description, brand, image, situation, comments } = req.body;

      await knex("items").insert({
        description,
        brand,
        image,
        situation,
        comments,
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
};
