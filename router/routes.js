import express from 'express'
const router = express.Router()

// import {insert} from '../controller/controller.js'
// import {find} from '../controller/controller.js'
// import {update} from '../controller/controller.js'
import {erase} from '../controller/controller.js'
import {login} from '../controller/controller.js'
import {sign} from '../controller/controller.js'
import {user} from '../controller/controller.js'
import {loginuser} from '../controller/controller.js'
import {addUser} from '../controller/controller.js'
import {adminAddUser} from '../controller/controller.js'
import {showUsers} from '../controller/controller.js'
import {update} from '../controller/controller.js'
import {updateUser} from '../controller/controller.js'




// router.post("/add",insert)
// router.get("/find",find)
// router.put("/update/:id",update)

router.get("/",login)
router.get("/sign",sign)

// router.use("/",(req, res, next)=>{
//    if (req.session.admin) {
//       next()
//    }
//    else {
//       res.redirect('/')
//    }
// })

router.post("/signUser",user)
router.post("/adminHome",loginuser)
router.get("/add-user",addUser)
router.post("/adminAdd",adminAddUser)

router.get("/admin",showUsers)

router.get("/delete/:id",erase)
router.get("/update/:id",update)
router.post("/updateUser/:id",updateUser)

export default router