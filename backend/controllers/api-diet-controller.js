const Diet = require("../database/models/Diet");

const getDiets = (req, res) => {
    Diet.findAll()
        .then(diets => {
            if (diets !== null) {
                res.status(200).json(diets)
                res.end()
            } else {
                throw false
            }

        })
        .catch(() => {
            res.status(404).json()
            res.end()
        })
}

const getDiet = (req, res) => {
    Diet.find({
        where: {
            ID: req.params.id
        }
    })
        .then(diet => {
            if (diet !== null) {
                res.status(200).json(diet)
                res.end()
            } else {
                throw false
            }
        })
        .catch(() => {
            res.status(404).json()
            res.end()
        })
}

module.exports = {getDiet, getDiets}