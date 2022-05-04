import {useState} from "react";
import {useDispatch} from "react-redux";

import "../../../App.scss"
import AuthService from "../../../services/auth.service";


export const Login = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            dispatch(AuthService.login(data.email, data.password))
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <div className="authorization-container">
            <h1>Log in!</h1>
            <form method="POST" onSubmit={handleSubmit} className="authorization-form">
                <label htmlFor="email">Email</label>
                <input type="email"
                       name="email"
                       onChange={handleChange}
                       className="authorization-input"
                />
                <label htmlFor="password">Password</label>
                <input type="password"
                       name="password"
                       onChange={handleChange}
                       className="authorization-input"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}