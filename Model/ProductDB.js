
require('dotenv').config({ path: '../.env' })
const mongobd = require('mongoose')
const Product = require('../Model/ProductSchema')
const productJson = require('./Product.json')
const connectDB = require('../Config/config')

let dbUrl = connectDB.db.url

const start = async () =>{

    try {
await mongobd.connect(dbUrl , {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
await Product.create(productJson)
console.log('Success')

    } catch (error) {
        console.log(error)
    }
}

start()