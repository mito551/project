const {verifySignUp, authJWT} = require('../middlewares')
const controller = require('../controllers/scores.controller')
const router = require('express').Router()

module.exports = app => {

    router.get('/',[authJWT.verifyToken], controller.findAll)
    router.get('/:id',[authJWT.verifyToken], controller.findOne)
    router.post('/', controller.create)

    app.use('/api/scores', router)
}