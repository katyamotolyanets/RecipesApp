import {logoutUser, setUser} from "../reducers/userReducer";

const axios = require("axios");

class AuthService {
    login(email, password) {
        return async dispatch => {
            try {
                const userData = {
                    EMAIL: email,
                    PASSWORD: password
                };
                const response = await axios
                    .post('http://localhost:8000/api/login/', userData)
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.token);
            } catch (err) {
                console.log(err.response.data.message)
            }
        }
    }

    auth() {
        return async dispatch => {
            try {
                const response = await axios.get('http://localhost:8000/api/auth/',
                    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
                )
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.token);
            } catch (err) {
                console.log(err.response.data.message)
                localStorage.removeItem('token');
            }
        }
    }

    logout() {
        return async dispatch => {
            dispatch(logoutUser())
            localStorage.removeItem('token');
        }
    }

    register(username, email, password) {
        const userData = {
            USERNAME: username,
            EMAIL: email,
            PASSWORD: password
        };
        axios.post("http://localhost:8000/api/registration", userData)
            .then(response => {
                console.log(response.status)
            })
            .catch(error => {
                console.log(error.response.data.message)
            })
    }
}

export default new AuthService();