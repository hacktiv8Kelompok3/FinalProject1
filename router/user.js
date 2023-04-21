const router = require('express').Router()
const user = require('../controllers/usercontrollers')

router.post('/register',user.register)

module.exports = router