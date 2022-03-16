const express = require('express')
const router = express.Router()
const Favorite = require("../database/models/Favorite");

router.get('/', (req, res) =>
    Favorite.findAll()
        .then(favorites => {
            console.log(favorites)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router