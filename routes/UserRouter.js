const UserController = require('../controllers/userController.js')

const router = require('express').Router()

router.post('/addUser',UserController.addUser)

router.get('/getUser',UserController.getUser)

router.get('/:id',UserController.getOneUser)

router.put('/:id',UserController.UpdateUser)

router.delete('/:id',UserController.DeleteUser)

module.exports= router