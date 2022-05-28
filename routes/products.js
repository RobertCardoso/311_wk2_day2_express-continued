const express = require('express')
const router = express.Router()

let productsController = require('../controllers/products')


router.get("/products", productsController.list)

router.get("/products/:id", productsController.show )

router.post("/products", productsController.create )

module.exports = router