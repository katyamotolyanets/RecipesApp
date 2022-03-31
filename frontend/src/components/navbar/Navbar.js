import {Link} from "react-router-dom";

import userIcon from "../../assets/user-icon.png"

export const Navbar = () => {
    return (
        <nav>
            <div>
                <input type="search"/>
            </div>
            <div>
                <Link to={{pathname: `/user-profile/id`}}>
                    <img src={userIcon} alt=""/>
                </Link>
            </div>
        </nav>
    )
}