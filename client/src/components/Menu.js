import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'

function Menu(props) {
    return(
        <div>
            <div className='menu-login'>
                
                <div className='menu-item'>
                    {props.isAuth ? null: <NavLink to = '/register'>Register</NavLink>}
                </div>
                <div className='menu-item'>
                    {props.isAuth ? null: <NavLink to = '/login'>Login</NavLink>}
                </div>
            </div>
            <div className='menu-main'>
                <div>
                    {/* <NavLink to = '/home'>Home</NavLink> */}
                </div>
                <div className='menu-item'>
                    { props.isAuth ? <NavLink to = '/add-restaurant'>Add Restaurant</NavLink>: null}
                </div>
                <div className='menu-item'>
                    { props.isAuth ? <NavLink to = '/display-list'>View Restaurant's</NavLink>: null}
                </div>
                <div>
                    {/* <NavLink to = '/search'>Search</NavLink> */}
                </div>
                <div className='menu-logout'>
                    { props.isAuth ? <NavLink to = '/logout' >Logout</NavLink>: null}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

export default connect(mapStateToProps)(Menu)