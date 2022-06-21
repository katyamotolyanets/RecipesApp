import {BrowserRouter as Router, Navigate, Route} from 'react-router-dom';
import {Routes, R} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import './App.scss';
import {Recipe} from "./components/recipe/Recipe";
import {Navbar} from "./components/navbar/Navbar";
import {Login} from "./components/authentication/login/Login";
import {Register} from "./components/authentication/register/Register";
import {UserProfile} from "./components/user-profile/UserProfile";
import {MainPage} from "./components/main/MainPage";
import {UnauthorizedUserProfile} from "./components/user-profile/UnauthorizedUserProfile";
import AuthService from "./services/auth.service";

const App = () => {
    const isAuthorized = useSelector(state => state.user.isAuthorized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(AuthService.auth())
    }, [])

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/recipes' element={<MainPage/>}/>
                <Route path='/recipes/:id' element={<Recipe/>}/>
                {
                    isAuthorized ?
                        <Route path='/user/:id' element={<UserProfile/>}/>
                        :
                        <Route path='/user/:id' element={<UnauthorizedUserProfile/>}/>
                }
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
