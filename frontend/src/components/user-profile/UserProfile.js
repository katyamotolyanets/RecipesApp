import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import axios from "axios";

import "../../App.scss"
import CreateRecipeForm from "./CreateRecipeForm";
import {logoutUser} from "../../reducers/userReducer";
import {RecipesItem} from "../recipes/RecipesItem";
import {Navigate} from "react-router-dom";
import {Login} from "../authentication/login/Login";

export const UserProfile = () => {
    const id = useSelector(state => state.user.currentUser.id)
    const [user, setUser] = useState([])
    const [favorites, setFavorites] = useState([])
    const dispatch = useDispatch()

    useEffect(async () => {
        //setPending(true)
        await axios({
            method: "GET",
            url: `http://localhost:8000/api/users/${id}`
        })
            .then(response => {
                //setPending(false)
                setUser(response.data)
                setFavorites(response.data.recipes?.map(recipe => {
                    return recipe.ID
                }))
            })
    }, [id])

    const logout = () => {
        dispatch(logoutUser())
    }

    /*useEffect(() => {
        console.log(user?.recipes)
        setFavorites(user?.recipes?.map(recipe => {
            return recipe.ID
        }))
    }, [user?.recipes])*/

    return (
        <div className="user-profile-container">
            <input type="radio" name="tab-btn" id="tab-btn-1" value=""/>
            <label htmlFor="tab-btn-1">Избранное</label>
            <input type="radio" name="tab-btn" id="tab-btn-2" value=""/>
            <label htmlFor="tab-btn-2">Создать рецепт</label>
            {/*            <div className="creation-form">
                <CreateRecipeForm/>
            </div>*/}
            <div className="recipes-container" id="content-1">
                <h1>{user.USERNAME}'s favorite recipes</h1>
                <div className="recipes-list">
                    <ul className="recipe">
                        {
                            user?.recipes?.map(recipe => {
                                    return (
                                        <li key={recipe.ID}>
                                            <RecipesItem
                                                recipe={recipe}
                                                favorites={favorites}
                                            />
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
            <button
                onClick={logout}
                className="logout-button"
            >
                Log out
            </button>
        </div>
    );
};
