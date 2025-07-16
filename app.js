import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import routes from './router/routes.js'
import productRoutes from './router/productsRoutes.js'
// import variable from './models/user.js'

const app = express()
app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(session(
    {
        secret: "my secret key",
        saveUninitialized: true,
        resave: false
    }
)



)

app.set('view engine', 'ejs')

const uri = ("mongodb://localhost:27017/PostMan")
mongoose.connect(uri).then(() => {
    console.log("CONNECTED");

})

app.use(routes)

app.use(productRoutes)

app.listen(3000, () => {
    console.log("Server started");

})

