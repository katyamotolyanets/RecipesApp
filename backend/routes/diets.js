const express = require('express')
const router = express.Router()
const Diet = require("../database/models/Diet");

router.get('/', (req, res) =>
    Diet.findAll()
        .then(diets => {
            console.log(diets)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router