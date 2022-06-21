import {logoutUser, setUser} from "../reducers/userReducer";
import {setFailedLoginMessage, setFailedMessage, setFailedRegisterMessage} from "../reducers/messageReducer";

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
                    .catch(error => {
                        dispatch(setFailedLoginMessage(error.response.data.message))
                    })
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', response.data.token);
            } catch (err) {
                dispatch(setFailedLoginMessage(err.response.data.message))
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
        return async dispatch => {
            try {
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
                        dispatch(setFailedRegisterMessage(error.response.data.message))
                    })
            } catch (error) {
                dispatch(setFailedRegisterMessage(error.response.data.message))
            }
        }
    }
}

export default new AuthService();