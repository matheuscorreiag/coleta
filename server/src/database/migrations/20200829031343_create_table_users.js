const { onUpdateTrigger } = require("../../../knexfile.js");

exports.up = (knex) =>
  knex.schema
    .createTable("users", (table) => {
      table.increments("id");
      table.text("name").notNullable();
      table.text("email").unique().notNullable();
      table.text("cell").unique().notNullable();
      table.text("password").notNullable();
      table.text("center").notNullable();
      table.text("city").notNullable();
      table.text("state").notNullable();
      table.integer("flag").notNullable();

      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .then(() => knex.raw(onUpdateTrigger("users")));

exports.down = (knex) => knex.schema.dropTable("users");
