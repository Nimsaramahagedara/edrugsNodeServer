import express from "express";
import { addProduct, deleteProduct, getAllProduct, getAllProducts, getProduct, searchProduct } from "../controllers/productController.js";


const productRouter = express.Router();

productRouter.post('/', addProduct);
productRouter.get('/:id', getProduct);

//GET ALL PROD
productRouter.get('/', getAllProducts);
//GET ALL PRODUCTS BELONGS TO PHARMACY
productRouter.get('/', getAllProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.get('/search/:keyword', searchProduct);



export default productRouter;