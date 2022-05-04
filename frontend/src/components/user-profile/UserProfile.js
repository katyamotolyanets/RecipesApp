import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import axios from "axios";

import "../../App.scss"
import CreateRecipeForm from "./CreateRecipeForm";
import {logoutUser} from "../../reducers/userReducer";

export const UserProfile = () => {
    const {id} = useParams();
    const [user, setUser] = useState([])

    useEffect(async () => {
        //setPending(true)
        await axios({
            method: "GET",
            url: `http://localhost:8000/api/users/${id}`
        })
            .then(response => {
                //setPending(false)
                setUser(response.data)
            })
    }, [id])



    const dispatch = useDispatch()



    return (
        <div>
            <div>
                <div>{user.USERNAME}</div>
            </div>
            <div className="creation-form">
                <CreateRecipeForm/>
            </div>
{/*
            <button onClick={() => dispatch(logoutUser())}>Log out</button>
*/}
        </div>
    );
};
