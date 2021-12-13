const router = require('express').Router()
const { myQuery } = require('../db/config')

router.put('/up/:id', async (req, res) => {
    try {
        const query = `UPDATE posts SET votes = votes + 1 WHERE id = ${req.params.id}`
        await myQuery(query)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.put('/down/:id', async (req, res) => {
    try {
        const query = `UPDATE posts SET votes = votes - 1 WHERE id = ${req.params.id}`
        await myQuery(query)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = router