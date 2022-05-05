
const express = require('express')

const {ProductIndex, InsertProducts, DeleteProcutResult} = require('../Controller/ProductController')

const ProductRoutes = express();

ProductRoutes.get('/Products', ProductIndex)
ProductRoutes.post('/Products/post', InsertProducts)
ProductRoutes.delete('/Products/delete/:id', DeleteProcutResult)

module.exports =  ProductRoutes;
