exports.up = function (knex, Promise) {
    return knex.schema.createTable('activity', (table) => {
        table.increments('id'),
        table.text('activity'),
        table.string('openedOn')
        table.text('title'),
        table.text('createdBy'),
        table.text('image')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('activity')
};