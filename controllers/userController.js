const db = require('../models')
const bcrypt=require('bcrypt')
const Review=db.review
const User = db.user

// create API

// create 
const addUser = async (req, res) => {

    const userExist = await User.findOne({where: {email:req.body.email}})
    if(userExist)
    {
        return res.status(404).send("USER ALREADY EXIST PLEASE SIGNUP WITH ANOTHER EMAIL")
    }
    else
    {
            const salt= await bcrypt.genSalt(10)
            const hashPass = await bcrypt.hash(req.body.password,salt)

            let info = {
                name: req.body.name,
                password: hashPass,
                email: req.body.email
            }

            const user = await User.create(info)
            res.status(200).send(user)
        }
}

// get all

const getUser = async (req, res) => {

    let user = await User.findAll({
        attributes: ['name', 'email']
    })
    res.status(200).send(user)
}

// get one

const getOneUser = async (req, res) => {
    let id = req.params.id
    const user = await User.findOne({ where: { id: id } })
    res.status(200).send(user)
}

// update

const UpdateUser = async (req, res) => {
    let id = req.params.id
    console.log(id)
    const user = await User.update(req.body, { where: { id: id } })
    res.status(200).send(user)
}

//  Delete

const DeleteUser = async (req, res) => {
    let id = req.params.id
    await User.destroy({ where: { id: id } })
    res.status(200).send("Deleted successfully")
}

// get reviews 

const GetReview= async(req,res)=>{
    const reviews=await User.findAll({
        include:[{
            model: Review,
            as:'review'
        }],
        where:{id:req.body.id}
    })
    res.status(200).send(reviews)
}

module.exports = {
    addUser,
    getOneUser,
    getUser,
    UpdateUser,
    DeleteUser,
    GetReview
}