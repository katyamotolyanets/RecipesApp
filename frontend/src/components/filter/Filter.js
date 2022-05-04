import React, {useEffect, useState} from 'react';
import axios from "axios";

import "../../App.scss"
import {FilterButton} from "./FilterButton";

export const Filter = (props) => {
    const [mealTypes, setMealTypes] = useState([])
    const [filter, setFilter] = useState(0)

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/meal-types/`
        })
            .then(response => {
                setMealTypes(response.data)
            })
    })

    const filterList = mealTypes.map(mealType => {
        const {ID: id, NAME: name} = mealType
        return (
            <FilterButton
                key={id}
                name={name}
                setFilter={props.setFilter}
                id={id}
            />
        )
    });

    return (
        <div className="filter-container">
            {filterList}
        </div>
    );
};