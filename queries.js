const database = require("./database-connection");

module.exports = {
    list() {
        return database('user').select()
    },
    read(id) {
        return database('user').select().where('id', id).first()
    },
    getUserByEmail(email) {
        return database('user').select().where('email', email).first()
    },
    create(user) {
        return database('user').insert(user).returning('*').then(record => record[0])
    },
    update(id, user) {
        return database('user').where('id', id).update(user, '*').then(record => record[0])
    },
    delete(id) {
        return database('user').where('id', id).del()
    }
}