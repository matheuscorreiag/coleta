
exports.up = knex => knex.schema.createTable('items', table => {
    table.increments('id')
    table.text('description').notNullable();
    table.text('brand').notNullable();
    table.text('image').notNullable();
    table.text('situation').notNullable();
    table.text('local').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('items')
