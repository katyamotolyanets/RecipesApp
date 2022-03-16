const express = require('express')
const router = express.Router()
const MealType = require("../database/models/MealType");

router.get('/', (req, res) =>
    MealType.findAll()
        .then(mealTypes => {
            console.log(mealTypes)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router