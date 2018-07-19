const express = require('express')
const router = express.Router()

const queries = require('../queries/users')
const authUtils = require('../utils/auth')

router.post('/login', function(req, res, next) {
    queries.getUserByEmail(req.body.email)
        .then(user => {
            if(!user) {
                res.json({
                    error: 'User not found'
                })
                return
            }
            const passwordMatch = authUtils.comparePassword(req.body.password, user.password)
            if (passwordMatch) {
                const token = authUtils.createJWT(user)
                res.json({ token })
            } else {
                res.json({ error: 'Incorrect password' })
            }

        })
})

router.post('/register', function (req, res, next) {
    queries.create(req.body)
        .then(user => {
                const token = authUtils.createJWT(user)
                res.json({ token })
            }
        )
})

module.exports = router;