const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({

    _id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        required: true
      },
      stock:{
        type: Number,
        required: true,
      },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    Image:{
        type: String,
        required: true,
    },
    images:{
    type:Array,
    default:[]
    },
    star:{
        type: Number,
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
    reviews:{
        type:String,
        default:'20'
    },
    Vendor:{
        type:String,
        default:'apple',
       
    },
    size:{
        type: Array,
        default: ['SM','L','XL','XXL'],
    },
    color:{
        type: Array,
        default: ['red','blue','green'],
    },
    creatDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Product',userSchema)