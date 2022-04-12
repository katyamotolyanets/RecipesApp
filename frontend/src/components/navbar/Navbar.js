import {Link} from "react-router-dom";

import "../../App.scss"
import userIcon from "../../assets/user-icon.png"

export const Navbar = () => {
    return (
        <header className="navbar-container">
            <div className="logo">
                <Link to={{pathname: `/recipes/`}}>
                    recipe
                </Link>
            </div>
            <div className="user-profile">
                <Link to={{pathname: `/user-profile/id`}}>
                    <img src={userIcon} className="user-image"/>
                </Link>
            </div>
        </header>
    )
}