import axios from "axios";
import {setFindRecipes} from "../reducers/recipesReducer";

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

    search(query) {
        return async dispatch => {
            try {
                await axios.get(`http://localhost:8000/api/recipes/?search=${query}`)
                    .then(response => {
                        if (query)
                            dispatch(setFindRecipes(response.data.map(recipe => recipe.doc.ID)))
                        else
                            dispatch(setFindRecipes([]))

                    })
            } catch (err) {
                console.log(err.response.data.message)
            }
        }
    }
}

export default new RecipeService();