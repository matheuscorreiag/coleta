exports.up = (knex) =>
  knex.schema.createTable("items", (table) => {
    table.increments("id");
    table.text("category").notNullable();
    table.integer("group").notNullable();
    table.text("brand").notNullable();
    table.text("image").notNullable();
    table.text("comments").notNullable();
    table.text("origin").notNullable();
    table.text("tipping").notNullable();
    table.text("model").notNullable();
    table.text("serial").notNullable();
    table.text("weight").notNullable();
    table.text("condition").notNullable();

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("items");
