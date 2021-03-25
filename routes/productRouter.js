import express from 'express';
import {getASingleProduct, getAllProducts, getTopProdcuts} from '../controllers/productController.js'
const router = express.Router()

router.get('/top', getTopProdcuts)
router.route('/').get(getAllProducts)
router.route('/:id').get(getASingleProduct)

export default router