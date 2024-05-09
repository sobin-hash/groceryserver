const items = require('../Models/productSchema')


exports.getAllItemsController = async(req,res)=>{
    try{
        const result = await items.find()  
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)

    }
}


exports.getSpecificItemController = async(req,res)=>{
    try{
        const itemId = req.params.id

        const result = await items.findOne({_id:itemId})  
        res.status(200).json(result)
    }catch(err){
        res.status(401).json(err)

    }
}


exports.addController=async(req,res)=>{
    
    const {item,quantity,price}=req.body
    
    
    try{
      
        const newItem = new items({item,quantity,price})
            await newItem.save()
            res.status(201).json(newItem)
    }catch(err){
        res.status(401).json(err)
    }

}


exports.editController=async(req,res)=>{
    const {item,quantity,price}=req.body
    
    
    
    const itemId = req.params.id
    try{
    
        const result = await items.findOneAndUpdate({_id:itemId},{item,quantity,price})
        
        res.status(201).json(result)
    }catch(err){
        res.status(401).json(err)
    }

}

exports.deleteController=async(req,res)=>{
    
    const itemId = req.params.id
    try{
    
        const result = await items.findOneAndDelete({_id:itemId})
        
        res.status(201).json(result)
    }catch(err){
        res.status(401).json(err)
    }

}
