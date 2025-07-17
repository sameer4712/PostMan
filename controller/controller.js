import variable from '../models/user.js'
import adminUsers from '../models/adminUserSchema.js'
import { ObjectId } from 'mongodb'

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


const erase = async (req, res) => {
   const userid = req.params.id
   // const data = req.body
   const user = await adminUsers.findByIdAndDelete(userid)
   res.redirect('/admin')
}


// login and sign up

const login = (req, res) => {
   res.render('login')
}

const sign = (req, res) => {
   res.render('sign-up')
}

const addUser = (req, res) => {
   if (req.session.admin) {
      res.render('add-user')
   }
   else {
      res.redirect("/")
   }

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
   res.redirect('/')

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
      const sesson = {
         email: check.email,
         password: check.password,
      }
      req.session.admin = sesson;

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


const showUsers = async (req, res) => {
   if (req.session.admin) {
      const users = await adminUsers.find()
      res.render('admin-dash', { users })
   }
   else {
      res.redirect('/')
   }

}

const logout = (req, res) => {
   req.session.destroy(() => {
      console.log("destroid");
      res.redirect('/')

   })

}

const update = async (req, res) => {
   const userid = req.params.id
   // const data = req.body
   const user = await adminUsers.findById(userid)
   if (req.session.admin) {
      res.render('edit', { user })
   }
   else{
      res.redirect('/')
   }
}


const updateUser = async (req, res) => {
   const userid = req.params.id
   await adminUsers.findByIdAndUpdate(userid, {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
   })

   res.redirect('/admin')
}



export { login, sign, user, erase, loginuser, addUser, adminAddUser, showUsers, logout, update, updateUser }





//  insert, find, update, 