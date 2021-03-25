import asyncHandler from 'express-async-handler'
import Product from '../model/productModel.js';

// @route       GET api/v1/products
// @desc        Get all Products
// @access      Public

export const getAllProducts = asyncHandler(async (req, res) => {
    
    const keyword = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const products = await Product.find({...keyword})
    res.json(products)
})

// @route       GET api/v1/products/id
// @desc        Get a single Product
// @access      Public

export const getASingleProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.status(200).json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
})

//!
// @route       GET api/v1/products/id
// @desc        Get a single Product
// @access      Public

export const getTopProdcuts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({rating: -1}).limit(3)
    res.json(products)
})

