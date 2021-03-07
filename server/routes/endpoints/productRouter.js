const express = require('express');
const ProductController = require('../../controllers/ProductController');

const productRouter = (ProductModel, SellerModel) => {
    const router = express.Router();

    const productController = new ProductController(ProductModel, SellerModel);

    router.get('/', productController.getAll);

    router.post('/create', productController.uploadImg(), productController.create);

    //mengembalikan module router
    return router;
}

module.exports = productRouter;