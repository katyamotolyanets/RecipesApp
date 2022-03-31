const Recipe = require("../database/models/Recipe");
const Ingredient = require("../database/models/Ingredient");

const getRecipes = (req, res) => {
    Recipe.findAll({
        attributes: [
            'ID',
            'TITLE',
            'TIMEOFCOOKING',
            'IMAGE',
            'AUTHORID'
        ]
    })
        .then(recipes => {
            if (recipes !== null) {
                res.status(200).json(recipes)
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

const getRecipe = (req, res) => {
    Recipe.find({
        where: {
            ID: req.params.id,
        },
        include: [{
            model: Ingredient,
            attributes: ['NAME'],
            through: {attributes: []},
        }]
    })
        .then(recipe => {
            if (recipe !== null) {
                res.status(200).json(recipe)
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

module.exports = {getRecipes, getRecipe}