import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    }
},
{timestamps:true}
);

const adminUsers = mongoose.model('Users',userSchema)

export default adminUsers
