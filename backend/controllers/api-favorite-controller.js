require('dotenv').config();
const jwt = require('jsonwebtoken')

const User = require("../models/User");
const Favorite = require("../models/Favorite");
const Recipe = require("../models/Recipe");
const {JWT_ACCESS_SECRET_KEY} = process.env

const getUserFromRequest = (req) => {
    const token = req.headers.authorization.split('Bearer ')[1]
    if (token) {
        return jwt.decode(token, JWT_ACCESS_SECRET_KEY).ID
    }
}

const getFavorites = (req, res) => {
    const userID = getUserFromRequest(req)
    User.findOne({
        where: {
            ID: userID,
        },
        include: {
            model: Recipe,
            attributes:['ID'],
            through: {
                attributes: []
            }
        },
        attributes: []
    })
        .then(data => {
            if (data !== null) {
                console.log(data)
                data = data.recipes.map(favorite => Number(favorite.ID))
                res.status(200).json(data)
                res.end()
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(404).json({message: 'Can not find user with that id :('})
            res.end()
        })
}

const addFavorite = (req, res) => {
    const userID = getUserFromRequest(req)
    const favorite = {
        USERID: userID,
        RECIPEID: req.body.recipeID
    }
    Favorite.create(favorite)
        .then(data => {
            res.status(200).json(data)
            res.end()
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({message: err})
            res.end()
        })
}

const deleteFavorite = async (req, res) => {
    const userID = getUserFromRequest(req)
    Favorite.destroy({
        where: {
            USERID: userID,
            RECIPEID: req.params.id
        },
        raw:true
    })
        .then(() => {
            res.status(200)
            res.end()
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({message: err})
        })
}

module.exports = {
    getFavorites,
    addFavorite,
    deleteFavorite
}