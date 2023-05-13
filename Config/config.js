
require('dotenv').config({ path: '../.env' })

const div={

app:{
    port:process.env.PORT || 4000,
},

db:{
    url:process.env.DATABASE
},

}

module.exports=div;