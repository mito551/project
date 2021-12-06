const {authJWT} = require('../middlewares')
const controller = require('../controllers/user.controller')
// const controller = require('../controllers/auth.controller')

module.exports = app => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next()
    })

   app.get(
       "/api/users",
       [authJWT.verifyToken],
       controller.findAll
   )

    // const router = require('express').Router()
}