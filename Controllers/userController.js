const users = require('../Models/userSchema')
// const items = require('../Models/productSchema')
const jwt = require('jsonwebtoken')



exports.userLoginController = async (req,res) => {
    console.log("Inside login")
    console.log(req.body)
    const { email,password } = req.body
    console.log(email)
    console.log(password)
    try {

        
        
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRETKEY)
            res.status(200).json({ token, existingUser})
        } else {


            res.status(401).json("Invalid username or password")
            
        }


    } catch (err) {

        res.status(401).json(err)

    }
    
}
