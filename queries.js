const database = require('./database-connection')
const authUtils = require('./utils/auth')

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
        user.password = authUtils.hashPassword(user.password)
        return database('user').insert(user).returning('*').then(record => record[0])
    },
    update(id, user) {
        return database('user').where('id', id).update(user, '*').then(record => record[0])
    },
    delete(id) {
        return database('user').where('id', id).del()
    }
}