const mongoose = require('mongoose')
const connectionString =  process.env.DATABASE

mongoose.connect(connectionString).then((res)=>{
    console.log("Mongodb connected ....")
}).catch((err)=>{
    console.log(err)
})