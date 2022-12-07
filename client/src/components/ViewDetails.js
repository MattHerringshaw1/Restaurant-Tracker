import { NavLink } from 'react-router-dom'

function ViewDetails() {
    return (
        <>
            <h1>view details below</h1>
            <NavLink to = '/display-list'><button>Back</button></NavLink>
        </>
    )
}

export default ViewDetails