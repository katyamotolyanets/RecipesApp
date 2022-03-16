const express = require('express')
const router = express.Router()
const Recipe = require("../database/models/Recipe");

router.get('/', (req, res) =>
    Recipe.findAll()
        .then(recipes => {
            console.log(recipes)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router