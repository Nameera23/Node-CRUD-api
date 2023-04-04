const db = require('../models')

const Review = db.review

const AddReview = async (req,res) =>{
    const info= {
        title:req.body.title,
        review:req.body.review,
        published:req.body.published
    }
    const review = await Review.create(info)
    res.status(200).send(review)
}

const UpdateReview = async (req,res) =>{
    const id = req.params.id
    const review =await Review.update(req.body, {where: {id:id}})
    res.send(200).send(review)
}

const DeleteReview = async (req, res) =>{
    const id = req.params.id
    const review = await Review.destroy({where: {id:id}})
    res.send(200).send("deleted successfully")
}

const GetReview=async(req,res) =>{
    const review = await Review.findAll({
        attributes: ['title','review','published']
    })
    res.status(200).send(review)
}

module.exports={
    AddReview,
    UpdateReview,
    DeleteReview,
    GetReview
}