import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";

import "../../App.scss"
import {Loader} from "../loader/Loader"
import {useSelector} from "react-redux";

export const Recipe = () => {
    const [recipe, setRecipe] = useState({})
    const [isPending, setPending] = useState(false)
    const {id} = useParams();
    const isAuthorized = useSelector(state => state.user)
    console.log(isAuthorized)

    useEffect(async () => {
        setPending(true)
        await axios({
            method: "GET",
            url: `http://localhost:8000/api/recipes/${id}`
        })
            .then(response => {
                setPending(false)
                setRecipe(response.data)
            })
    }, [id])

    const {
        TITLE: title,
        TIMEOFCOOKING: timeOfCooking,
        DESCRIPTION: description,
        DIRECTIONS: directions,
        IMAGE: image,
        CALORIES: calories,
        INGREDIENTs: ingredients,
        USER: user
    } = recipe

    const parsedDirections = directions?.split("/n")

    return (
        isPending ?
            <Loader/> :
            <div className="recipe-container">
                <div className="recipe-preview">
                    <div className="recipe-image">
                        <img src={image} alt="Recipe photo"/>
                    </div>
                    <div className="recipe-info">
                        <div className="recipe-title">{title}</div>
                        <div className="recipe-author">{
                            user?.USERNAME ? user?.USERNAME : "Yummly"
                        }</div>
                        <div className="recipe-description">{description}</div>
                        <div className="recipe-subinfo">
                            <div>{ingredients?.length} ingredients</div>
                            <div>{timeOfCooking} minutes</div>
                            {
                                calories ?
                                    <div>{calories} calories</div>
                                    : ""
                            }
                        </div>
                    </div>
                </div>
                <div className="recipe-instructions">
                    <div className="recipe-ingredients">
                        <h1>Ingredients</h1>
                        <div>
                            <ul className="ingredients-list">
                                {ingredients?.map(ingredient => {
                                    return (
                                        <li className="ingredients-item" key={ingredient.ID}>
                                            {ingredient.RECIPEINGREDIENTS?.QUANTITYOFINGREDIENT} {ingredient.NAME}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                   <div className="recipe-directions">
                       <h1>Directions</h1>
                       {
                           parsedDirections?.map(direction => {
                               if (direction) {
                                   return (
                                       <div className="direction" key={direction.ID}>
                                           <h2>Step {parsedDirections.indexOf(direction) + 1}</h2>
                                           <p>{direction}</p>
                                       </div>
                                   )
                               }}
                           )
                       }
                   </div>
                </div>
            </div>
    )
}