import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import "../../App.scss"

export const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/recipes`
        })
            .then(response =>
                setRecipes(response.data)
            )
    }, [])

    return (
        <div className="recipes-container">
            <ul className="recipe">
                {recipes.map(recipe => {
                    return (
                        <li>
                            <Link to={{pathname: `/recipes/${recipe.ID}`}}>
                                <div className="image-container">
                                    <img src={recipe.IMAGE}></img>
                                </div>
                                <div className="recipe-title">{recipe.TITLE}</div>
                                <div className="recipe-time">{recipe.TIMEOFCOOKING} minutes</div>
                                <div className="recipe-author">{recipe.AUTHORID}</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}
