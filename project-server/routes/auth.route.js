const {verifySignUp} = require('../middlewares')
const controller = require('../controllers/auth.controller')

module.exports = app => {
    app.post(
        "/api/auth/signup",
        [verifySignUp.checkDuplicateEmail],
        controller.signup
    )

    app.post(
        "/api/auth/signin",
        // [verifySignUp.checkDuplicateEmail],
        controller.signin
    )
}