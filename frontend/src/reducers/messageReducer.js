const FAILED_REGISTER = 'FAILED_REGISTER';
const FAILED_LOGIN = 'FAILED_LOGIN';
const defaultState = {
    login_message: "",
    register_message: ""

}

export default function recipesReducer(state = defaultState, action) {
    switch (action.type) {
        case FAILED_REGISTER:
            return {
                register_message: action.payload
            }
        case FAILED_LOGIN:
            return {
                    login_message: action.payload
            }
        default:
            return state
    }
}

export const setFailedRegisterMessage = (message) => ({type: FAILED_REGISTER, payload: message})
export const setFailedLoginMessage = (message) => ({type: FAILED_LOGIN, payload: message})


