import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <div>
            <NavLink to = '/register'>Register</NavLink>
            <NavLink to = '/login'>Login</NavLink>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/add-restaurant'>Add Restaurant</NavLink>
            <NavLink to = '/display-list'>View Restaurant's</NavLink>
            <NavLink to = '/about-me'>About</NavLink>
            <NavLink to = '/logout'>Logout</NavLink>
        </div>
    )
}

export default Menu