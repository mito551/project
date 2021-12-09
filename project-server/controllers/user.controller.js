const db = require('../models')
const User = db.user
// const Op = db.Sequelize.Op

exports.findAll = (req, res) => {
    User.findAll({
        // where: {
        //     username: {[Op.like]: "%admin%"}
        // }
    })
        .then(data=>{
            res.send(data)
    })
        .catch(err => {
            res.send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    User.findByPk(id, {
        include: ["scores"],
        attributes: {
            exclude: ["password"]
        },
        order: ["createdAt", "DESC"]
    })
        .then(data=>{
            if (!data) {
                return res.status(404).send({message: "User not found"})
            }
            res.send(data)
    })
        .catch(err => {
            res.send({message: err.message})
        })
}
