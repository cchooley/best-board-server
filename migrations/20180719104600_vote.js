exports.up = function (knex, Promise) {
    return knex.schema.createTable('vote', (table) => {
        table.increments('id'),
        table.text('name'),
        table.date('openedOn')
        table.date('closedOn'),
        table.text('createdBy'),
        table.text('issue'),
        table.text('option1'),
        table.text('option2'),
        table.text('option3'),
        table.integer('yesVote'),
        table.specificType('votedYes', 'text[]'),
        table.integer('noVote'),
        table.specificType('votedNo', 'text[]'),
        table.integer('abVote'),
        table.specificType('votedAb', 'text[]')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('vote')
};