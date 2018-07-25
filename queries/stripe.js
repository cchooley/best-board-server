const database = require('../database-connection')

module.exports = {
    list() {
        return database('payment').select()
    },
    read(id) {
        return database('payment').select().where('id', id).first()
    },
    create(payment) {
        return database('payment').insert(payment).returning('*').then(record => record[0])
    },
    update(id, payment) {
        return database('payment').where('id', id).update(payment, '*').then(record => record[0])
    },
    delete(id) {
        return database('payment').where('id', id).del()
    }
}