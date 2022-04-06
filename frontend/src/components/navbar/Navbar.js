import {Link} from "react-router-dom";

import "../../App.scss"
import userIcon from "../../assets/user-icon.png"
import userIconHover from "../../assets/user-icon-hover.png"
import logo from "../../assets/logo.png"

export const Navbar = () => {
    return (
        <header className="navbar-container">
            {/*<div className="search-container">
                <input type="search"/>
            </div>*/}
            <div className="logo">
                <Link to={{pathname: `/recipes/`}}>
                    recipe
                </Link>
            </div>
            <div className="user-profile">
                <Link to={{pathname: `/user-profile/id`}}>
                    <img src={userIcon} className="user-image"/>
                    <img src={userIconHover} className="user-image-hover"/>
                </Link>
            </div>
        </header>
    )
}