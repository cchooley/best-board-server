const express = require('express')
const router = express.Router()

const queries = require('../queries')
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

router.post('/signup', function (req, res, next) {
    res.json({ res })

    /*
    queries.create(req.body)
        .then(queries.getUserByEmail(req.body.email))
        .then(user => {
            const passwordMatch = authUtils.comparePassword(req.body.password, user.password)
            if (passwordMatch) {
                const token = authUtils.createJWT(user)
                res.json({ token });
            } else {
                res.json({ error: 'That did not work' })
            }
        })
        */
});

module.exports = router;