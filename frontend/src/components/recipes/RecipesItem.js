import React from "react";
import {Link} from "react-router-dom";

export const RecipesItem = ({recipe}) => {
    const {
        ID: id,
        IMAGE: image,
        TITLE: title,
        TIMEOFCOOKING: timeOfCooking,
        USER: user
    } = recipe

    return (
        <li>
            <Link to={{pathname: `/recipes/${id}`}}>
                <div className="image-container">
                    <img src={image}></img>
                </div>
                <div className="recipe-title">{title}</div>
                <div className="recipe-info">
                    <div className="recipe-time">{timeOfCooking} minutes</div>
                    <div className="recipe-author">{
                        user ? user.USERNAME : "Yummly"
                    }</div>
                </div>
            </Link>
        </li>
    );
};