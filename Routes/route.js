const express = require('express')
const userController = require('../Controllers/userController')
const itemController = require('../Controllers/itemController')
const jwtMiddleWare = require('../Middlewares/jwtMiddleware')


// const adminMiddleWare = require('../Middleware/adminMiddleware')

const router = express.Router() //router instance from express


router.post('/login',userController.userLoginController)





router.post('/edititem/:id',jwtMiddleWare,itemController.editController)

router.post('/additem',jwtMiddleWare,itemController.addController)
router.get('/getallitems',jwtMiddleWare,itemController.getAllItemsController)
router.get('/getspecificitem/:id',jwtMiddleWare,itemController.getSpecificItemController)

router.delete('/deleteitem/:id',jwtMiddleWare,itemController.deleteController)

module.exports = router