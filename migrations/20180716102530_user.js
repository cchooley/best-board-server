exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id'),
        table.text('name'),
        table.string('image')
        table.text('email'),
        table.text('organization'),
        table.text('role'),
        table.text('password'),
        table.integer('memberSince'),
        table.integer('termExpires'),
        table.string('committees'),
        table.string('voteHistory')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('user')
};