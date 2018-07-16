const express = require('express')
const router = express.Router()

const queries = require('../queries')
const authUtils = require('../utils/auth')

router.post('/login', function(req, res, next) {
    console.log(req.body)

    queries.getUserByEmail(req.body.email)
        .then(user => {
            // If user does not exist, return error
            if(!user) {
                res.json({
                    error: 'User not found'
                })
                return
            }

            const passwordMatch = authUtils.comparePassword(req.body.password, user.password)

            if (passwordMatch) {
                res.json({ message: 'login successful' })
            } else {
                res.json({ error: 'Incorrect password' })
            }

        })
})

module.exports = router;