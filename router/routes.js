import express from 'express'
const router = express.Router()

// import {insert} from '../controller/controller.js'
// import {find} from '../controller/controller.js'
// import {update} from '../controller/controller.js'
// import {erase} from '../controller/controller.js'
import {login} from '../controller/controller.js'
import {sign} from '../controller/controller.js'
import {admin} from '../controller/controller.js'
import {user} from '../controller/controller.js'
import {loginuser} from '../controller/controller.js'
import {addUser} from '../controller/controller.js'
import {adminAddUser} from '../controller/controller.js'


// router.post("/add",insert)
// router.get("/find",find)
// router.put("/update/:id",update)
// router.delete("/delete/:id",erase)
router.get("/",login)
router.get("/",sign)
router.get("/admin",admin)
router.post("/",user)
router.post("/admin",loginuser)
router.get("/add-user",addUser)
router.post("/adminAdd",adminAddUser)



export default router