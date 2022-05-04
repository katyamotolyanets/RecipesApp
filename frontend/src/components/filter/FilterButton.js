import React from 'react';

export const FilterButton = (props) => {
    return (
        <button
            type="button"
            onClick={() => props.setFilter(props.id)}
        >
            {props.name}
        </button>
    );
};