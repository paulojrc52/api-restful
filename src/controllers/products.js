const ProductsModel = require('../models/products')


async function get(req, res) {
   
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)

}

module.exports = {
    get,
}