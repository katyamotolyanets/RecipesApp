import {useState} from "react";

import "../../App.scss"

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const onChangeInput = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="search-field">
            <input
                type="search"
                onChange={onChangeInput}
                value={searchQuery}
            />
        </div>
    )
}