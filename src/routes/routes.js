const router = require('express').Router()

const ProductsController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)
// GET - Obter dados
// POST - Enviar/Receber dados
// PUT - Atualizar dados
// DELETE - Remover dados


router.get('/products/:id?', ProductsController.get)
// router.post('/products', ProductsController.post)
// router.put('/products/:id', ProductsController.put)
// router.delete('/products/:id', ProductsController.delete)

module.exports = router