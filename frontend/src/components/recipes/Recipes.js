import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import "../../App.scss"
import {Loader} from "../loader/Loader"
import {Search} from "../search/Search"

export const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [isPending, setPending] = useState(false)

    useEffect(async () => {
        setPending(true)
        await axios({
            method: "GET",
            url: `http://localhost:8000/api/recipes`
        })
            .then(response => {
                setPending(false)
                setRecipes(response.data)
            })
    }, [])

    const {
        ID: id,
        IMAGE: image,
        TITLE: title,
        TIMEOFCOOKING: timeOfCooking,
        USER: user
    } = recipes

    return (
        isPending ?
            <Loader/> :
            <div className="recipes-container">
                <Search/>
                <div className="recipes-list">
                    <h1>Recipes just for you</h1>
                    <ul className="recipe">
                        {recipes.map(recipe => {
                            return (
                                <li>
                                    <Link to={{pathname: `/recipes/${recipe.ID}`}}>
                                        <div className="image-container">
                                            <img src={recipe.IMAGE}></img>
                                        </div>
                                        <div className="recipe-title">{recipe.TITLE}</div>
                                        <div className="recipe-info">
                                            <div className="recipe-time">{recipe.TIMEOFCOOKING} minutes</div>
                                            <div className="recipe-author">{
                                                user ? user.username : "Yummly"
                                            }</div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
    )
}
