import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import userReducer from './userReducer'
import recipesReducer from "./recipesReducer";
import messageReducer from "./messageReducer";

const rootReducer = combineReducers({
    user: userReducer,
    recipes: recipesReducer,
    message: messageReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))