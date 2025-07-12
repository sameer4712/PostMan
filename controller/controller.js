import variable from '../models/user.js'

const insert = async (req,res)=>{
   const user = await variable.insertMany(req.body)
   res.send(user)
}

const find = async (req,res)=>{
   const user = await variable.find()
   res.send(user)
}

const update = async (req,res)=>{
   const user = await variable.updateOne(req.body)
   res.send(user)
}

const erase = async (req,res)=>{
   const user = await variable.deleteOne(req.body)
   res.send(user)
}

export {insert}
export {find}
export {update}
export {erase}