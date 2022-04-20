import {Link} from "react-router-dom";

import "../../App.scss"
import userIcon from "../../assets/user-icon.png"
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../reducers/userReducer";

export const Navbar = () => {
    const isAuthorized = useSelector(state => state.user.isAuthorized)
    const dispatch = useDispatch()
    return (
        <header className="navbar-container">
            <div className="logo">
                <Link to={{pathname: `/recipes/`}}>
                    recipe
                </Link>
            </div>
            <div className="user-profile">
                {isAuthorized ?
                    <div>
                        <button onClick={() => dispatch(logoutUser())}>Log out</button>
                        <img src={userIcon} className="user-image"/>
                    </div>
                    :
                    <div>
                        <Link to={{pathname: `/login`}}>
                            <p>Log in</p>
                        </Link>
                        <Link to={{pathname: `/register`}}>
                            <p>Sign up</p>
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}