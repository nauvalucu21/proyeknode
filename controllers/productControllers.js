// import models
import Product from "../models/Product.js";
 
// function get All Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
     
}
 
// function get single Product
export const getProductByid = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
     
}
 
// function Create Product
export const saveProduct = async (req, res) => {
    console.log(req.body)
    const product = new Product(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Update Product
export const updateProduct = async (req, res) => {
    const cektitle = await Product.findById(req.params.id);
    if(!cektitle) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
// function Delete Product
export const deleteProduct = async (req, res) => {
    const cektitle = await Product.findById({_id:req.params.id});
    if(!cektitle) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedProduct = await Product.deleteOne({_id: req.params.id});
        res.status(200).json(deletedProduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}