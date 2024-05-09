const Mongoose = require("mongoose")

const productSchema = new Mongoose.Schema({

    item:{
        type:String,
        required:true

    },
    quantity:{
        type:String,
        required:true

    },
    price:{
        type:String,
        required:true

    },
    
    
    


})

const items = Mongoose.model('items',productSchema)
module.exports=items

