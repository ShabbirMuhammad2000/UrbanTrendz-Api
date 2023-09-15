const express = require('express')
const router = express.Router()

const {kidsTShirts, kidsShorts, kidsJeans, kidsSweatpants, kidsSweaters, kidsShoes, kidsHats} = require('../Data/data')

router.get('/tshirts', (req, res) => {
  res.json(kidsTShirts)
})

router.get('/tshirts/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in kidsTShirts
  const product = kidsTShirts.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
})

router.get('/shorts', (req, res) => {
  res.json(kidsShorts)
})

router.get('/shorts/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in kidsShorts
  const product = kidsShorts.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
})

router.get('/jeans', (req, res) => {
  res.json(kidsJeans)
})

router.get('/jeans/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in kidsJeans
  const product = kidsJeans.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
})

router.get('/seatpants', (req, res) => {
  res.json(kidsSweatpants)
})

router.get('/seatpants/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in kidsSweatpants
  const product = kidsSweatpants.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
})

router.get('/sweaters', (req, res) => {
  res.json(kidsSweaters)
})

router.get('/sweaters/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in kidSweaters
  const product = kidsSweaters.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
})

router.get('/shoes', (req, res) => {
  res.json(kidsShoes)
})

router.get('/shoes/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in kidsShoes
  const product = kidsShoes.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
})

router.get('/hats', (req, res) => {
  res.json(kidsHats)
})

router.get('/hats/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Verify that a product with this ID exists in kidsHats
  const product = kidsHats.find((product) => product.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
})

module.exports = router