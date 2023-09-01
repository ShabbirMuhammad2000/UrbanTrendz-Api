const express = require('express')
const router = express.Router()
const PORT = 8080

// Importing data 
const {clothingCategories, subCategories} = require('./data')
// Men products data
const {mensTShirts, mensShorts, mensSweatpants, mensSweaters, mensShoes, mensJeans, mensHats} = require('./data')
// Womens products data
const {womensTShirts, womensSweatpants, womensSweaters, womensShorts, womensShoes, womensJeans, womensHats} = require('./data')
// Kids products data
const {kidsTShirts, kidsSweatpants, kidsSweaters, kidsShorts, kidsShoes, kidsJeans, kidsHats} = require('./data')

