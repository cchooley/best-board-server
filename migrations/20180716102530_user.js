exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id').primary(),
        table.text('name'),
        table.string('image')
        table.string('email'),
        table.text('organization'),
        table.text('role'),
        table.text('password'),
        table.integer('memberSince'),
        table.integer('termExpires'),
        table.specificType('committees', 'text[]')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('user')
};