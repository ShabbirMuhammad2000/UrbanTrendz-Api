const express = require('express')
const router = express.Router()

const {womensTShirts, womensShorts, womensJeans, womensSweatpants, womensSweaters,  womensHats, womensShoes } = require('../Data/data')

router.get('/tshirts', (req, res) => {
  res.json(womensTShirts)
})

router.get('/tshirts/:id', (req, res) => {
  const productId = parseInt(req.params.id)

   // Verify that a product with this ID exists in womenTShirts
   const product = womensTShirts.find((product) => product.id === productId);

   if (!product) {
     return res.status(404).json({ message: 'Product not found' });
   }
 
   res.json(product);
})

router.get('/shorts', (req, res) => {
  res.json(womensShorts)
})

router.get('/shorts/:id', (req, res) => {
  const productId = parseInt(req.params.id)

   // Verify that a product with this ID exists in womenTShirts
   const product = womensShorts.find((product) => product.id === productId);

   if (!product) {
     return res.status(404).json({ message: 'Product not found' });
   }
 
   res.json(product);
})

router.get('/jeans', (req, res) => {
  res.json(womensJeans)
})

router.get('/jeans/:id', (req, res) => {
  const productId = parseInt(req.params.id)

   // Verify that a product with this ID exists in womenTShirts
   const product = womensJeans.find((product) => product.id === productId);

   if (!product) {
     return res.status(404).json({ message: 'Product not found' });
   }
 
   res.json(product);
})


router.get('/sweatpants', (req, res) => {
  res.json(womensSweatpants)
})

router.get('/sweatpants/:id', (req, res) => {
  const productId = parseInt(req.params.id)

   // Verify that a product with this ID exists in womenTShirts
   const product = womensSweatpants.find((product) => product.id === productId);

   if (!product) {
     return res.status(404).json({ message: 'Product not found' });
   }
 
   res.json(product);
})


router.get('/sweaters', (req, res) => {
  res.json(womensSweaters)
})

router.get('/sweaters/:id', (req, res) => {
  const productId = parseInt(req.params.id)

   // Verify that a product with this ID exists in womenTShirts
   const product = womensSweaters.find((product) => product.id === productId);

   if (!product) {
     return res.status(404).json({ message: 'Product not found' });
   }
 
   res.json(product);
})



router.get('/hats', (req, res) => {
  res.json(womensHats)
})

router.get('/hats/:id', (req, res) => {
  const productId = parseInt(req.params.id)

   // Verify that a product with this ID exists in womenTShirts
   const product = womensHats.find((product) => product.id === productId);

   if (!product) {
     return res.status(404).json({ message: 'Product not found' });
   }
 
   res.json(product);
})


router.get('/shoes', (req, res) => {
  res.json(womensShoes)
})

router.get('/shoes/:id', (req, res) => {
  const productId = parseInt(req.params.id)

   // Verify that a product with this ID exists in womenTShirts
   const product = womensShoes.find((product) => product.id === productId);

   if (!product) {
     return res.status(404).json({ message: 'Product not found' });
   }
 
   res.json(product);
})

module.exports = router