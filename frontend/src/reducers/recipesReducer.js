const SEARCH_RECIPE = 'SEARCH_RECIPE'
const defaultState = {
    recipes: []
}

export default function recipesReducer(state = defaultState, action) {
    switch (action.type) {
        case SEARCH_RECIPE:
            return {
                recipes: action.payload
            }
        default:
            return state
    }
}

export const setFindRecipes = (recipes) => ({type: SEARCH_RECIPE, payload: recipes})


