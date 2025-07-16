import variable from '../models/user.js'
import adminUsers from '../models/adminUserSchema.js'
// import { ObjectId } from 'mongodb'

// const insert = async (req, res) => {
//    const user = await variable.insertMany(req.body)
//    res.send(user)
// }

// const find = async (req, res) => {
//    const user = await variable.find()
//    res.send(user)
// }

// const update = async (req, res) => {
//    const userid = new ObjectId(req.params.id)
//    const data = req.body
//    const user = await variable.updateOne({ _id: userid }, { $set: data })
//    res.send(user)
// }


// const erase = async (req, res) => {
//    const userid = new ObjectId(req.params.id)
//    // const data = req.body
//    const user = await variable.deleteOne({ _id: userid })
//    res.send(user)
// }


// login and sign up

const login = (req, res) => {
   res.render('login')
}

const sign = (req, res) => {
   res.redirect('/')
}

const addUser = (req, res) => {
   res.render('add-user')
}

const admin = (req, res) => {
   res.render('admin-dash')
}
const user = (async (req, res) => {
   const { name, email, password } = req.body;
   const addOne = new variable({
      name,
      email,
      password
   });
   await addOne.save()
   console.log(addOne)

})

const loginuser = async (req, res) => {
   const { email, password } = req.body;
   console.log(email);

   try {
      const check = await variable.findOne({ email });
      if (!check) {
         res.send('user not found')

      }
      if (check.password !== password) {
         res.send("NOt Matching Email and Password")
      }
      res.redirect('/admin')

   } catch (error) {
      res.send('wrong details')
   }

};



// add user by admin
const adminAddUser = (async (req, res) => {
   const adminAdd = await adminUsers.insertOne(req.body)
   console.log(adminAdd)
   res.redirect('/admin')
})

export { login, sign, admin, user, loginuser, addUser, adminAddUser }





//  insert, find, update, erase,