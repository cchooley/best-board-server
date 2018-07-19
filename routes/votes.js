const express = require('express');
const router = express.Router();

const queries = require('../queries/votes');

router.get("/", (request, response, next) => {
    queries.list()
        .then(votes => {
            response.json({ votes });
        })
        .catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id)
        .then(vote => {
            vote
                ? response.json({ vote })
                : response.status(404).json({ vote: 'Not found' })
        })
        .catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body)
        .then(vote => {
            response.status(201).json({ vote });
        })
        .catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id)
        .then(() => {
            response.status(204).json({ deleted: true });
        })
        .catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body)
        .then(vote => {
            response.json({ vote });
        })
        .catch(next);
});

module.exports = router;
