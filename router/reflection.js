const router = require('express').Router()
const reflection = require('../controllers/reflectioncontrollers')


router.post('/', reflection.createReflection)
router.get('/', reflection.getReflection)

module.exports = router