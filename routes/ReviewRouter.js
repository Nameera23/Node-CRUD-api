const ReviewRouter = require("../controllers/reviewController.js")

const router = require('express').Router()

router.post('/AddReview',ReviewRouter.AddReview)
router.get('/GetReview',ReviewRouter.GetReview)
router.put('/:id',ReviewRouter.UpdateReview)
router.delete('/:id',ReviewRouter.DeleteReview)

module.exports=router