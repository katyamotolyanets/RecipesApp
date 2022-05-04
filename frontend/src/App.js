import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import './App.scss';
import {Recipe} from "./components/recipe/Recipe";
import {Navbar} from "./components/navbar/Navbar";
import {Login} from "./components/authentication/login/Login";
import {Register} from "./components/authentication/register/Register";
import {UserProfile} from "./components/user-profile/UserProfile";
import AuthService from "./services/auth.service";
import {MainPage} from "./components/main/MainPage";

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
                <Route path='/login'
                       /*render={() => {return !isAuthorized && <Login/>}}*/
                    element={<Login/>}
                />
                <Route path='/register' element={<Register/>}/>
                <Route path='/recipes' element={<MainPage/>}/>
                <Route path='/recipes/:id' element={<Recipe/>}/>
                <Route path='/user/:id' element={<UserProfile/>}/>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
