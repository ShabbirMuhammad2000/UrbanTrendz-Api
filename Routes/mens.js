const express = require('express')
const router = express.Router()
const {mensTShirts, mensShorts, mensSweatpants, mensSweaters, mensShoes, mensJeans, mensHats} = require('../Data/data')

router.get('/tshirts', (req, res) => {
  res.json(mensTShirts)
})

router.get('/tshirts/:id', (req, res) => {
  const productId = req.params.id
  const product = mensTShirts.find((product) => product.id === productId)

  if(!product) {
    return res.status(404).json({ message: 'Product not found'})
  }

  res.json(product)
})

module.exports = router