const MealType = require("../models/MealType");

const getMealTypes = (req, res) => {
    MealType.findAll()
        .then(mealTypes => {
            res.status(200).json(mealTypes)
        })
        .catch(() => {
            res.status(400).json({message: 'Can not get meal types'})
        })
}

module.exports = {getMealTypes}
