const router = require('express').Router()

const ProductsController = require('../controllers/products')

router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.put('/products/:id', ProductsController.put)
router.delete('/products/:id', ProductsController.remove)

module.exports = router
