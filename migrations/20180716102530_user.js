exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id'),
        table.text('name'),
        table.text('email'),
        table.text('organization'),
        table.text('role'),
        table.text('password')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('message')
};