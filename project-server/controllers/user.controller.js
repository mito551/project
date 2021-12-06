const db = require('../models')
const User = db.user

exports.findAll = (req, res) => {
    User.findAll({})
        .then(data=>{
            res.send(data)
    })
        .catch(err => {
            res.send({message: err.message})
        })
}
