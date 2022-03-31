import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from 'react-router';

export const Recipe = () => {
    const [recipe, setRecipe] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/recipes/${id}`
        }).then(response => setRecipe(response.data))
    }, [id])

    return(
        <div>
            <div>{recipe.TITLE}</div>
            <img src={recipe.IMAGE} alt="ff"/>
        </div>
    )
}