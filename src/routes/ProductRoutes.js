
const express = require('express')

const {ProductIndex, InsertProducts} = require('../Controller/ProductController')

const ProductRoutes = express();

ProductRoutes.get('/Products', ProductIndex)
ProductRoutes.post('/Products/post', InsertProducts)

module.exports =  ProductRoutes;
