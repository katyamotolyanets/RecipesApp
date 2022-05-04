import React, {useEffect, useState} from 'react';
import axios from "axios";
import RecipeService from "../../services/recipe.service";
import {IngredientInput} from "./IngredientInput";

export const CreateRecipeForm = () => {
    const [mealTypes, setMealTypes] = useState([])
    const [diets, setDiets] = useState([])
    const [recipeData, setRecipeData] = useState({
        title: "",
        timeOfCooking: "",
        description: "",
        directions: "",
        image: "",
        mealTypeID: "",
        dietID: "",
        authorID: "",
        calories: ""
    })

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/meal-types/`
        })
            .then(response => {
                setMealTypes(response.data)
            })
        axios({
            method: "GET",
            url: `http://localhost:8000/api/diets/`
        })
            .then(response => {
                setDiets(response.data)
            })
    }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        setRecipeData({
            ...recipeData,
            [e.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            RecipeService.create(recipeData)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form method="POST" onSubmit={handleSubmit} className="recipe-creation-form">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={handleChange}/>
            <label htmlFor="timeOfCooking">Time of cooking (in minutes)</label>
            <input type="text" name="timeOfCooking" onChange={handleChange}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" onChange={handleChange}/>
            <label htmlFor="directions">Directions</label>
            <input type="text" name="directions" onChange={handleChange}/>
            <label htmlFor="image">URL to image</label>
            <input type="text" name="image" onChange={handleChange}/>
            <label htmlFor="mealTypeID">Meal type</label>
            <select name="mealTypeID" onClick={handleChange}>{
                mealTypes.map(mealType => {
                    return <option value={mealType.ID}>{mealType.NAME}</option>
                })
            }
            </select>
            <label htmlFor="dietID">Diet</label>
            <select name="dietID" onClick={handleChange}>{
                diets.map(diet => {
                    return <option value={diet.ID}>{diet.NAME}</option>
                })
            }
            </select>
            <label htmlFor="calories">Calories</label>
            <input type="text" name="calories" onChange={handleChange}/>
            <button onClick={() => {}}/>
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateRecipeForm;