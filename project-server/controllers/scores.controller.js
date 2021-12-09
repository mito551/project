const db = require('../models')
// const {request} = require("express");
const Score = db.score

exports.findAll = (req, res) => {
    Score.findAll({})
        .then(data=>{
            res.send(data)
    })
        .catch(err => {
            res.send({message: err.message})
        })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Score.findByPk(id,
        {
            include: ["user"]
        })
        .then(data=>{
            if (!data) {
                return res.status(404).send({message: "Not found"})
            }
            res.send(data)
    })
        .catch(err => {
            res.send({message: err.message})
        })
}
