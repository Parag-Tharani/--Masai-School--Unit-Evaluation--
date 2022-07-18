const express = require("express");
const dataPath = require('../products.json')
const Product = dataPath.products

async function getProducts(req,res){
    res.send(Product)
}

async function createProduct(req,res){
    let productData = req.body;

    Product.push(productData)

    res.send(Product)
}

async function patchProduct(req, res) {
    const { product: productData } = req.body;
    const { id: productId } = req.params;

    let product = await Product.findById(productId)

    for(const [key, value] of Object.entries(productData)) {
        product[key] = value;
    }

    return res.send(Product)
}

async function deleteProduct(req, res, next) {
    const { id: productId } = req.params;

    await Product.findByIdAndDelete(productId)

    return res.send("Product has been deleted successfully.")
}



module.exports = {
    getProducts,
    createProduct,
    patchProduct,
    deleteProduct
}