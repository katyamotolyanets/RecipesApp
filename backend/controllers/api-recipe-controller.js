const elasticlunr = require('../elasticlunr.js')
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
            'IMAGE',
            'MEALTYPEID'
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

const createRecipe = (req, res) => {
    const recipe = {
        TITLE: req.body.TITLE,
        TIMEOFCOOKING: req.body.TIMEOFCOOKING,
        DESCRIPTION: req.body.DESCRIPTION,
        DIRECTIONS: req.body.DIRECTIONS,
        IMAGE: req.body.IMAGE,
        MEALTYPEID: req.body.MEALTYPEID,
        DIETID: req.body?.DIETID,
        AUTHORID: req.body?.AUTHORID,
        CALORIES: req.body?.CALORIES
    }
    Recipe.create(recipe)
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json({message: err})
        })
}

const findRecipes = (req, res) => {
    res.send(Recipe.findAll({
        attributes: [
            'ID',
            'TITLE'
        ]
    })
        .then(data => {
            return JSON.stringify(data)
        }))
}

const searchRecipe = (req, res) => {
    let index = elasticlunr(function () {
        this.addField('TITLE');
        this.setRef('ID');
    });
    Recipe.findAll({
        attributes: [
            'ID',
            'TITLE'
        ],
        raw : true
    }).then(data => {
        data.forEach(recipe => {
            let rec = JSON.stringify(recipe)
            index.addDoc(JSON.parse(rec ));
        })
        return res.status(200).json(index.search(`?*${req.query.search}*`, {
            bool: "OR",
            expand: true
        }));
    })
}


module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    searchRecipe
}