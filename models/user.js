import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    place:String,
    email:String,
    password:String
})

const variable = mongoose.model('people',userSchema)

export default  variable
