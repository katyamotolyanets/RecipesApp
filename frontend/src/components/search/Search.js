import {useState} from "react";
import {useDispatch} from "react-redux";

import "../../App.scss"
import RecipeService from "../../services/recipe.service";


export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch();

    const onChangeInput = (e) => {
        setSearchQuery(e.target.value)
    }

    const search = (e) => {
        e.preventDefault()
        dispatch(RecipeService.search(searchQuery))
    }

    return (
        <div className="search-field">
            <form method="get" onSubmit={search}>
                <input
                    type="search"
                    onChange={onChangeInput}
                    value={searchQuery}
                    name="search"
                />
            </form>
        </div>
    )
}