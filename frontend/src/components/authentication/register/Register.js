import {useState} from "react";
import AuthService from "../../../services/auth.service";

export const Register = () => {
    const [data, setData] = useState({
        username: "",
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
        e.preventDefault();
        AuthService.register(
            data.username,
            data.email,
            data.password
        )
    };

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}