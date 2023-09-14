const express = require('express')
const app = express()
const PORT = 8080

const mensRouter = require('./Routes/mens')
const womensRouter = require('./Routes/women')

app.use('/api/mens', mensRouter)
app.use('/api/womens', womensRouter)

app.listen (PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

