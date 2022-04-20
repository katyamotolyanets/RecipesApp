const Ingredient = require("../models/Ingredient");

const getIngredients = (req, res) => {
    Ingredient.findAll()
        .then(ingredients => {
            if (ingredients !== null) {
                res.status(200).json(ingredients)
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

const getIngredient = (req, res) => {
    Ingredient.find({
        where: {
            ID: req.params.id
        }
    })
        .then(ingredient => {
            if (ingredient !== null) {
                res.status(200).json(ingredient)
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



module.exports = {getIngredients, getIngredient}