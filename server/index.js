const express = require('express')
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.use('/posts', require('./routes/posts'))
app.use('/comments', require('./routes/comments'))
app.use('/votes', require('./routes/votes'))

app.listen(1000, ()=>console.log("server up and running"))