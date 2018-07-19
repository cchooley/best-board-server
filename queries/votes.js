const database = require('../database-connection')

module.exports = {
    list() {
        return database('vote').select()
    },
    read(id) {
        return database('vote').select().where('id', id).first()
    },
    create(vote) {
        return database('vote').insert(vote).returning('*').then(record => record[0])
    },
    update(id, vote) {
        return database('vote').where('id', id).update(vote, '*').then(record => record[0])
    },
    delete(id) {
        return database('vote').where('id', id).del()
    }
}