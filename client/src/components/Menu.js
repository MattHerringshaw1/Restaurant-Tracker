import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

function Menu(props) {
    return(
        <div>
            {props.isAuth ? null: <NavLink to = '/register'>Register</NavLink>}
            {props.isAuth ? null: <NavLink to = '/login'>Login</NavLink>}
            {/* <NavLink to = '/home'>Home</NavLink> */}
            { props.isAuth ? <NavLink to = '/add-restaurant'>Add Restaurant</NavLink>: null}
            { props.isAuth ? <NavLink to = '/display-list'>View Restaurant's</NavLink>: null}
            {/* <NavLink to = '/search'>Search</NavLink> */}
            { props.isAuth ? <NavLink to = '/logout'>Logout</NavLink>: null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)