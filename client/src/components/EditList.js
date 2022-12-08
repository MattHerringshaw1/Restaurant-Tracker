import { NavLink } from "react-router-dom"
import EditRestaurant from "./EditRestaurant"


function EditList() {
    return (
        <>
            <h1>edit list below</h1>
            <EditRestaurant />
            <NavLink to = '/display-list'><button>Back</button></NavLink>
        </>
    )
}

export default EditList