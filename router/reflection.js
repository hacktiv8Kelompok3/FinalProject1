const router = require('express').Router()
const reflection = require('../controllers/reflectioncontrollers')


router.post('/', reflection.createReflection)

module.exports = router