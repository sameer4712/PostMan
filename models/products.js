
import mongoose from 'mongoose'
const product = new mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    description:String,
    category:Array
});

const item = mongoose.model('Products',product)

export default item