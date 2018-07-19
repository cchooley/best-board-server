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
        table.text('votedYes'),
        table.integer('noVote'),
        table.text('votedNo')
        table.integer('abVote')
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('vote')
};

/*         table.integer('vote1')
            .references('id')
            .inTable('user')
            .index(),
        table.integer('vote2')
            .references('id')
            .inTable('user')
            .index(),
        table.integer('vote3')
            .references('id')
            .inTable('user')
            .index()

 */
