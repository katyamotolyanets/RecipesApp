import {Link} from "react-router-dom";
import {ButtonAddToFavorite} from "../button-add-to-favorite/ButtonAddToFavorite";
import "../../App.scss"

export const RecipesItem = (props) => {
    const {
        ID: id,
        IMAGE: image,
        TITLE: title,
        TIMEOFCOOKING: timeOfCooking,
        USER: user
    } = props.recipe


    return (
        <div className="recipe-item-container">
            <ButtonAddToFavorite
                userID={user?.ID}
                recipeID={id}
                favorites={props.favorites}
            />
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
        </div>
    );
};