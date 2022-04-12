const Recipe = require("../database/models/Recipe");
const Ingredient = require("../database/models/Ingredient");
const RecipeIngredient = require("../database/models/RecipeIngredient");
const User = require("../database/models/User");

const getRecipes = (req, res) => {
    Recipe.findAll({
        attributes: [
            'ID',
            'TITLE',
            'TIMEOFCOOKING',
            'IMAGE'
        ],
        include: {
            model: User,
            attributes: ['USERNAME']
        }
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
    Recipe.findOne({
        where: {
            ID: req.params.id,
        },
        include: [{
            model: Ingredient,
            attributes: ['NAME'],
            through: {
                model: RecipeIngredient,
                attributes: ['QUANTITYOFINGREDIENT']
            }
        },
        {
            model: User,
            attributes: ['USERNAME']
        }]
    })
        .then(recipe => {
           if (recipe !== null) {
                res.status(200).json(recipe)
                res.end()
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(404).json()
            res.end()
        })
}


module.exports = {getRecipes, getRecipe}