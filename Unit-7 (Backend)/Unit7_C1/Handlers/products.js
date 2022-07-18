const express = require("express");
const dataPath = require('../products.json')
const Product = dataPath.products

async function getProducts(req,res){
    res.send(Product)
}

async function createProduct(req,res){
    let productData = req.body;

    Product.push(productData)
    res.send("Product added to List")
}

async function patchProduct(req, res) {
    const productData  = req.body;
    const { id: productId } = req.params;

    return res.send("Your Data has been Updated")
}

async function deleteProduct(req, res, next) {
    const { id: productId } = req.params;
    return res.send("Product has been deleted successfully.")
}



module.exports = {
    getProducts,
    createProduct,
    patchProduct,
    deleteProduct
}