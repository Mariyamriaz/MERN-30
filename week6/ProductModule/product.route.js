const express = require("express");
const productService = require("../services/Product.service");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const result = await productService.createProductService(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await productService.getProductsService();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await productService.updateProductService(
      req.params.id,
      req.body
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await productService.deleteProductService(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
