import {useEffect, useMemo, useState} from "react";
import axios from "axios";

import "../../App.scss"
import {Loader} from "../loader/Loader"
import {RecipesItem} from "./RecipesItem";
import {Filter} from "../filter/Filter";
import {ButtonAddToFavorite} from "../button-add-to-favorite/ButtonAddToFavorite";
import {useSelector} from "react-redux";

export const Recipes = () => {
    const searchRecipes = useSelector(state => state.recipes.recipes)
    const [recipes, setRecipes] = useState([])
    const [filteredRecipes, setFilteredRecipes] = useState([])
    const [isPending, setPending] = useState(false)
    const [filter, setFilter] = useState()
    const [favorites, setFavorites] = useState([])

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
            setFilteredRecipes(recipes.filter(recipe => {
                if (searchRecipes.length > 0)
                    return recipe.MEALTYPEID === filter && searchRecipes.includes(recipe.ID)
                else
                    return recipe.MEALTYPEID === filter
            }))
        }
    }, [filter, recipes])

    useMemo(() => {
        if (searchRecipes.length > 0) {
            setFilteredRecipes(recipes.filter(recipe =>
                searchRecipes.includes(recipe.ID)
            ))
        }
    }, [searchRecipes])

    useEffect(  () => {
        axios.get('http://localhost:8000/api/favorites',
            {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            .then(response => {
                setFavorites(response.data)
            })
    }, [])

    return (
        isPending ?
            <Loader/>
            :
            <div className="recipes-list">
                <h1>Recipes just for you</h1>
                <Filter setFilter={setFilter}/>
                <ul className="recipe">
                    {
                        filteredRecipes.map(recipe => {
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
    )
}
