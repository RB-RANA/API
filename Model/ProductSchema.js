

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Object,
        default:4.9
    },
    comapny:{
        type:String,
        values:['Chanel','Gucci','Nike','Ralph Lauren','Adidas'],
        message: `{values} Breand in onlay suppured`
    },
    creatDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Product',userSchema)