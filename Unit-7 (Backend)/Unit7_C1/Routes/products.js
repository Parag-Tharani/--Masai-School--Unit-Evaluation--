const express = require("express");
const { getProducts, createProduct, patchProduct, deleteProduct } = require("../Handlers/products");

const productsRouter = express.Router()


productsRouter.get("/products", getProducts)
productsRouter.post("/products/create", createProduct)
productsRouter.patch("/products/:id", patchProduct)
productsRouter.delete("/products/:id", deleteProduct)



module.exports = productsRouter