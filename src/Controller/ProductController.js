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

async function DeleteProcutResult(req, res) {
  const { id } = req.params;
  const deleteResult = await ProductModel.DeleteProduct(id);
  if (deleteResult === false) {
    res.status(500);
    return;
  }
  if (deleteResult.affectedRows !== 1) {
    res.json('no rows deleted');
    return;
  }
  res.json('Delete success');
}

module.exports = {
  ProductIndex,
  InsertProducts,
  DeleteProcutResult
};
