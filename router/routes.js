import express from 'express'
const router = express.Router()

import {insert} from '../controller/controller.js'
import {find} from '../controller/controller.js'
import {update} from '../controller/controller.js'
import {erase} from '../controller/controller.js'

router.post("/add",insert)
router.get("/find",find)
router.put("/update",update)
router.delete("/delete",erase)


export default router