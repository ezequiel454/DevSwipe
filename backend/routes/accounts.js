const router = require('express').Router()
const controller = require('../controllers/account')

const auth = require('./auth')

const db = require('../db')
const jwt = require('jsonwebtoken')
const jwtSecret = 'DevPlenoRocks!'

router.use(auth.checkJWT({ jwt, jwtSecret }))

router.post('/', auth.injectUserFromToken({ jwt, jwtSecret }), controller.create({ db }))
router.get('/me', controller.getMe({ db }))

module.exports = router
