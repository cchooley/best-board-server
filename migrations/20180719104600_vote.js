exports.up = function (knex, Promise) {
    return knex.schema.createTable('vote', (table) => {
        table.increments('id'),
        table.text('name'),
        table.date('openedOn')
        table.date('closedOn'),
        table.text('createdBy'),
        table.text('option1'),
        table.text('option2'),
        table.text('option3'),
        table.text('vote1'),
        table.text('vote2'),
        table.text('vote3')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('vote')
};