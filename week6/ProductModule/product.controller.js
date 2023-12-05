const ProductModel = require("../models/Product.model");

async function createProduct(productData) {
  try {
    const product = new ProductModel(productData);
    const result = await product.save();
    console.log("Product created:", result);
    return result;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
}

async function getProducts() {
  try {
    const products = await ProductModel.find();
    console.log("Products:", products);
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
}

async function updateProduct(productId, updatedData) {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );
    console.log("Product updated:", updatedProduct);
    return updatedProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}

async function deleteProduct(productId) {
  try {
    const deletedProduct = await ProductModel.findByIdAndRemove(productId);
    console.log("Product deleted:", deletedProduct);
    return deletedProduct;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
