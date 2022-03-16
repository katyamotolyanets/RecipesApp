const express = require('express')
const router = express.Router()
const UserDiet = require("../database/models/UserDiet");

router.get('/', (req, res) =>
    UserDiet.findAll()
        .then(userDiets => {
            console.log(userDiets)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router