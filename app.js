import express from 'express'
import mongoose from 'mongoose'
import routes from './router/routes.js'

const app = express()

app.use(express.json())

const uri = ("mongodb://localhost:27017/PostMan")
mongoose.connect(uri).then(() => {
    console.log("CONNECTED");

})

app.use(routes)

app.listen(3000,()=>{
    console.log("Server started");
    
})

