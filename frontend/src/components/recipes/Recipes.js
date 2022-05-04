import {useEffect, useMemo, useState} from "react";
import axios from "axios";

import "../../App.scss"
import {Loader} from "../loader/Loader"
import {RecipesItem} from "./RecipesItem";
import {Filter} from "../filter/Filter";

export const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])
    const [isPending, setPending] = useState(false)
    const [filter, setFilter] = useState()

    useEffect(async () => {
        setPending(true)
        await axios({
            method: "GET",
            url: `http://localhost:8000/api/recipes`
        })
            .then(response => {
                setPending(false)
                setRecipes(response.data)
                setFilteredRecipes(response.data)
            })
    }, [])

    useMemo(() => {
        if (filter !== 0) {
            setFilteredRecipes(recipes.filter(recipe =>
                recipe.MEALTYPEID === filter
            ))}
        },
        [filter])

    return (
        isPending ?
            <Loader/>
            :
            <div className="recipes-list">
                <h1>Recipes just for you</h1>
                <Filter setFilter={setFilter}/>
                <ul className="recipe">
                    {
                        filteredRecipes
                            .map(recipe => {
                            return (
                                <RecipesItem key={recipe.ID} recipe={recipe}/>
                            )}
                        )
                    }
                </ul>
            </div>
    )
}
