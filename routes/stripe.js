const express = require('express')
const router = express.Router()
const stripe = require('stripe')("sk_test_TwTTlid3GeOG6YPydOjARw4I")
const queries = require('../queries/stripe')

router.use(require('body-parser').text())

router.get('/', (req, res) => {
    res.json({
        message: 'Stripe'
    })
})

router.post("/charge", async (req, res) => {
    try {
        let { status } = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });

        res.json({ status });
    } catch (err) {
        res.status(500).end();
    }
});

router.post('/register', function (req, res, next) {
    queries.create(req.body)
        .then(user => {
            const token = authUtils.createJWT(user)
            res.json({ token })
        }
        )
})

module.exports = router;