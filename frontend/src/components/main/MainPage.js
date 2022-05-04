import "../../App.scss"
import {Recipes} from "../recipes/Recipes";
import {SearchContainer} from "../search/SearchContainer";

export const MainPage = () => {
    return (
        <div className="recipes-container">
            <SearchContainer/>
            <Recipes/>
        </div>
    )
}
