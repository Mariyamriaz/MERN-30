const productController = require("../controllers/Product.controller");

async function createProductService(productData) {
  return productController.createProduct(productData);
}

async function getProductsService() {
  return productController.getProducts();
}

async function updateProductService(productId, updatedData) {
  return productController.updateProduct(productId, updatedData);
}

async function deleteProductService(productId) {
  return productController.deleteProduct(productId);
}

module.exports = {
  createProductService,
  getProductsService,
  updateProductService,
  deleteProductService,
};
