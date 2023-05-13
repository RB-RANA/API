const express = require ('express')
const app = express();
const cors = require('cors')
const router = require('./Router/Router.js')
require('./Config/db.js')




app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/product',router)

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/./View/index.html')
})

app.use((req,res,next)=>{

    res.status(404).json({
        massage:'Route Not fount'
    })})

app.use((error,req,res,next)=>{
    res.status(500).json({Massage:"Server Error"})
})

module.exports = app;