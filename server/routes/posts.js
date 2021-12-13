const router = require('express').Router()
const { myQuery } = require('../db/config')

router.get('/', async (req, res) => {
    try {
        const query = `SELECT * FROM posts ORDER BY votes DESC`
        const posts = await myQuery(query)
        res.send(posts)
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const query = `SELECT * FROM posts WHERE id = ${req.params.id}`
        const posts = await myQuery(query)
        res.send(posts[0])
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.post('/add', async (req, res) => {
    try {
        const { title, img } = req.body
        const query = `INSERT INTO posts (title, img) VALUES ("${title}","${img}")`
        await myQuery(query);
        const query1 = `SELECT * FROM posts ORDER BY votes DESC`;
        const posts = await myQuery(query1);
        res.status(201).send(posts);
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})



module.exports = router