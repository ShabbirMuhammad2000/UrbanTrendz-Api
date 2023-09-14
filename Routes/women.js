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


module.exports = router