const { Router } = require('express')
const controllers = require('../controllers')
const restrict = require('../helpers/index')

const router = Router()

router.get('/users', controllers.getUsers)
router.post('/signup', controllers.signUp)
router.post('/signin', controllers.signIn)

module.exports = router