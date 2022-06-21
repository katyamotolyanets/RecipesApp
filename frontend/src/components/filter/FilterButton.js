import React from 'react';

import "../../App.scss"

export const FilterButton = (props) => {
    return (
        <button
            type="button"
            className="filter-button"
            onClick={() => props.setFilter(props.id)}
        >
            {props.name}
        </button>
    );
};