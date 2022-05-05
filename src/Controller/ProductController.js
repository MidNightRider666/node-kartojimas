const ProductModel = require('../Models/ProductModel');
const { failResponce, successResponce } = require('../Utilities/dbHelper');

async function ProductIndex(req, res) {
  const products = await ProductModel.GetProducts();
  return products === false
    ? failResponce(res)
    : successResponce(res, products);
}

async function InsertProducts(req, res) {
    const NewProductData = req.body;
    const ProductAddingResult = await InsertIntoNewProduct(NewProductData);
    return ProductAddingResult === false
    ? failResponce(res)
    : successResponce(res, products);

}


module.exports = {
    ProductIndex,
    InsertProducts
}