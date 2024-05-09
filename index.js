require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./Routes/route')


require('./connection/db')

const grocery = express()
grocery.use(cors())
grocery.use(express.json())


grocery.use(route)

const PORT = 3000 || process.env.PORT

grocery.listen(PORT,()=>{

    console.log(`items server started at : ${PORT}`)
})

grocery.get('/',(req,res)=>{
    res.send("<h1> ..waiting for client request </h1>")
})