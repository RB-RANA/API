
const Router = require('express').Router()

const {getAllProduct} = require('../Controller/Product.js')


Router.get('/',getAllProduct)




module.exports = Router;