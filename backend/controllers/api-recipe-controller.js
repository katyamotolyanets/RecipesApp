const Recipe = require("../models/Recipe");
const Ingredient = require("../models/Ingredient");
const RecipeIngredient = require("../models/RecipeIngredient");
const User = require("../models/User");

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
            res.status(404).json({message: 'Can not get recipes :('})
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
            res.status(404).json({message: 'Can not get recipe with that id :('})
            res.end()
        })
}


module.exports = {getRecipes, getRecipe}