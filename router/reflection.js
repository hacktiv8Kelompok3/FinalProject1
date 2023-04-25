const router = require('express').Router()
const reflection = require('../controllers/reflectioncontrollers')


router.post('/', reflection.createReflection)
router.get('/', reflection.getReflection)
router.put('/:id',reflection.updateReflection)
router.delete('/:id',reflection.deleteReflection)

module.exports = router