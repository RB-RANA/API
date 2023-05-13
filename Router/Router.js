
const Router = require('express').Router()

const {getAllProduct,testinggetAllProduct} = require('../Controller/Product.js')


Router.get('/',getAllProduct)
Router.get('/',testinggetAllProduct)



module.exports = Router;