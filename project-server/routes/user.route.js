const {authJWT} = require('../middlewares')
const controller = require('../controllers/user.controller')
// const controller = require('../controllers/auth.controller')

module.exports = app => {
   app.get(
       "/api/users",
       [authJWT.verifyToken],
       controller.findAll
   )

    // const router = require('express').Router()
}