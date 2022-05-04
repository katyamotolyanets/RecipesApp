import {Link} from "react-router-dom";

import "../../App.scss"
import userIcon from "../../assets/user-icon.png"
import {useSelector} from "react-redux";

export const Navbar = () => {
    const isAuthorized = useSelector(state => state.user.isAuthorized)
    const user = useSelector(state => state.user.currentUser)
    const {ID: id} = user

    return (
        <header className="navbar-container">
            <div className="logo">
                <Link to={{pathname: `/recipes/`}}>
                    recipe
                </Link>
            </div>
            <div className="user-links">
                {isAuthorized ?
                    <div className="user-profile">
                        <Link to={{pathname: `/user/${id}`}}>
                            <img src={userIcon} className="user-image"/>
                        </Link>
                    </div>
                    :
                    <div className="user-authentication">
                        <Link to={{pathname: `/login`}}>
                            Log in
                        </Link>
                        <Link to={{pathname: `/register`}}>
                            Sign up
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}