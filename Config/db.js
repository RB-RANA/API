
const mongobd = require('mongoose')

const config = require('./config.js')

const dbUrl = config.db.url;
mongobd.connect(dbUrl,{
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

.then(()=>{
    console.log('MongoDB is connect')
})

.catch((error)=>{
console.log(error)
process.exit(1);
})