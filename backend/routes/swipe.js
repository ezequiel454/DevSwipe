const router = require('express').Router()
const controller = require('../controllers/swipe')

router.get('/organizations', controller.getOrganization())
router.get('/accounts', controller.getAccounts())
router.get('/account/:id', controller.getAccount())
router.get('/assets', controller.getAssets())
router.get('/payments/:id', controller.getPayment())
router.post('/accounts', controller.createAccount())
router.post('/payments', controller.createPayment())

module.exports = router
