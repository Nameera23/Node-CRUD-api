const db = require('../models')

const User = db.user

// create API

// create 
const addUser = async(req,res) => {
    let info = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }

const user = await User.create(info)
res.status(200).send(user)
}

// get all

const getUser = async (req,res)=>{

        let user = await User.findAll( {
            attributes:['name','email']
})
res.status(200).send(user)
}

// get one

const getOneUser = async (req,res) =>{
    let id= req.params.id
    const user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)
}

// update

const UpdateUser = async (req,res) =>{
    let id = req.params.id
    console.log(id)
    const user = await User.update(req.body,{ where: { id: id }})
    res.status(200).send(user)
}

//  Delete

const DeleteUser = async (req,res)=>{
    let id = req.params.id
    await User.destroy({where:{id: id}})
    res.status(200).send("Deleted successfully")
}
module.exports ={
    addUser,
    getOneUser,
    getUser,
    UpdateUser,
    DeleteUser
}