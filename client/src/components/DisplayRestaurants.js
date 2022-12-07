import { NavLink } from 'react-router-dom'


function DisplayRestaurant() {

    return(
        <>
            <h1>display restaurants added</h1>
            <NavLink to = '/view-details'><button>View Details</button></NavLink>
            <NavLink to = '/edit-list'><button>Edit</button></NavLink>
        </>
    )
}

export default DisplayRestaurant