const database = require('../database-connection')

module.exports = {
    list() {
        return database('activity').select()
    },
    read(id) {
        return database('activity').select().where('id', id).first()
    },
    create(activity) {
        return database('activity').insert(activity).returning('*').then(record => record[0])
    },
    update(id, activity) {
        return database('activity').where('id', id).update(activity, '*').then(record => record[0])
    },
    delete(id) {
        return database('activity').where('id', id).del()
    }
}