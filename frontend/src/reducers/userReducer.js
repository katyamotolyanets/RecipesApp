const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'

const defaultState = {
    currentUser: {},
    isAuthorized: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload.user,
                isAuthorized: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuthorized: false
            }
        default:
            return state
    }

}

export const setUser = user => ({type: SET_USER, payload: user})
export const logoutUser = () => ({type: LOGOUT})