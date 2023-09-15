const express = require('express')
const app = express()
const PORT = 8080

const mensRouter = require('./Routes/mens')
const womensRouter = require('./Routes/women')
const kidsRouter = require('./Routes/kids')

app.use('/api/mens', mensRouter)
app.use('/api/womens', womensRouter)
app.use('/api/kids', kidsRouter)

app.listen (PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

