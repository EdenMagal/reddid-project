const router = require('express').Router()
const { myQuery } = require('../db/config')


router.get('/:postid', async (req, res) => {
    try {
        const query = `SELECT * FROM comments WHERE postid = ${req.params.postid}`
        const comments = await myQuery(query)
        res.send(comments)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.post('/add', async (req, res) => {
    try {
        const { name, text, id } = req.body
        const query = `INSERT INTO comments (name, text, postid) VALUES ("${name}","${text}",${id})`
        await myQuery(query)
        const comments = await myQuery(`SELECT * FROM comments WHERE postid = ${id}`)
        res.send(comments)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router