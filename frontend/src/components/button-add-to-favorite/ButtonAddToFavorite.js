import React, {useEffect, useState} from 'react';
import axios from 'axios';

import '../../App.scss';
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";

export const ButtonAddToFavorite = (props) => {
    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(() => {
        setIsFavorite(props.favorites.includes(props.recipeID))
    }, [props.favorites])

    const addToFavorites = (userID, recipeID) => {
        axios.post('http://localhost:8000/api/favorites',
            {userID, recipeID},
            {headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(() => setIsFavorite(true))
    }

    const deleteFromFavorites = (userID, recipeID) => {
        axios.delete(`http://localhost:8000/api/favorites/${recipeID}`,
            {data: {userID}, headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}})
            .then(() => setIsFavorite(false))
    }

    return (
        isFavorite ?
            <button
                onClick={() => deleteFromFavorites(props.userID, props.recipeID)}
                className='button-favorite-dislike'
            >
                <img src={dislike}/>
            </button>
            :
            <button
                onClick={() => addToFavorites(props.userID, props.recipeID)}
                className='button-favorite-like'
            >
                <img src={like}/>
            </button>
    );
};

