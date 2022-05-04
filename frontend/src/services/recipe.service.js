import axios from "axios";

class RecipeService {
    create(recipe) {
        const {
            title,
            timeOfCooking,
            description,
            directions,
            image,
            mealTypeID,
            dietID,
            authorID,
            calories
        } = recipe
        const recipeData = {
            TITLE: title,
            TIMEOFCOOKING: timeOfCooking,
            DESCRIPTION: description,
            DIRECTIONS: directions,
            IMAGE: image,
            MEALTYPEID: mealTypeID,
            DIETID: dietID,
            AUTHORID: authorID,
            CALORIES: calories
        };
        axios.post('http://localhost:8000/api/recipes/', recipeData)
             .catch(err => console.log(err.response.data.message))
    }
}

export default new RecipeService();