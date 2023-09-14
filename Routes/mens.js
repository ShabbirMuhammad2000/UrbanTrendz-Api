const express = require('express')
const router = express.Router()
const {mensTShirts, mensShorts, mensSweatpants, mensSweaters, mensShoes, mensJeans, mensHats} = require('../Data/data')

router.get('/tshirts', (req, res) => {
  res.json(mensTShirts)
})

router.get('/tshirts/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in mensTShirts
  const product = mensTShirts.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});


router.get('/shorts', (req, res) => {
  res.json(mensShorts)
})

router.get('/shorts/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in mensShorts
  const product = mensShorts.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

router.get('/jeans', (req, res) => {
  res.json(mensJeans)
})

router.get('/jeans/:id', (req, res) => {
  const productId = parseInt(req.params.id)

  // Verify that a porduct with this ID exists in mensJeans
  const product = mensJeans.find((product) => product.id === productId)

  if(!product) {
    return res.status(404).json({message: 'Product not found'})
  }

  res.json(product)
})


router.get('/sweatpants', (req, res) => {
  res.json(mensSweatpants)
})

router.get('/sweatpants/:id', (req, res) => {
  const productId = parseInt(req.params.id)

  // Verify that a porduct with this ID exists in MensSweatpants
  const product = mensSweatpants.find((product) => product.id === productId)

  if(!product) {
    return res.status(404).json({message: 'Product not found'})
  }

  res.json(product)
})


router.get('/sweaters', (req, res) => {
  res.json(mensSweaters)
})

router.get('/sweaters/:id', (req, res) => {
  const productId = parseInt(req.params.id)

  // Verify that a porduct with this ID exists in MensSweatpants
  const product = mensSweaters.find((product) => product.id === productId)

  if(!product) {
    return res.status(404).json({message: 'Product not found'})
  }

  res.json(product)
})


router.get('/shoes', (req, res) => {
  res.json(mensShoes)
})

router.get('/shoes/:id', (req, res) => {
  const productId = parseInt(req.params.id)

  // Verify that a porduct with this ID exists in MensSweatpants
  const product = mensShoes.find((product) => product.id === productId)

  if(!product) {
    return res.status(404).json({message: 'Product not found'})
  }

  res.json(product)
})

router.get('/hats', (req, res) => {
  res.json(mensHats)
})

router.get('/hats/:id', (req, res) => {
  const productId = parseInt(req.params.id)

  // Verify that a porduct with this ID exists in MensSweatpants
  const product = mensHats.find((product) => product.id === productId)

  if(!product) {
    return res.status(404).json({message: 'Product not found'})
  }

  res.json(product)
})


module.exports = router