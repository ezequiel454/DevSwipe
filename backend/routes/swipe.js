const router = require('express').Router()
const controller = require('../controllers/swipe')


router.get('/', controller.get())
module.exports = router
