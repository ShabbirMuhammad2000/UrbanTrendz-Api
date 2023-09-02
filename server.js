const express = require('express')
const app = express()
const PORT = 8080

const mensRouter = require('./Routes/mens')

// Importing data 
const {clothingCategories, subCategories} = require('./Data/data')
// Men products data
const {mensTShirts, mensShorts, mensSweatpants, mensSweaters, mensShoes, mensJeans, mensHats} = require('./Data/data')
// Womens products data
const {womensTShirts, womensSweatpants, womensSweaters, womensShorts, womensShoes, womensJeans, womensHats} = require('./Data/data')
// Kids products data
const {kidsTShirts, kidsSweatpants, kidsSweaters, kidsShorts, kidsShoes, kidsJeans, kidsHats} = require('./Data/data')

app.use('/api/mens', mensRouter)


app.listen (PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

