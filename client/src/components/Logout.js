// import { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// function Logout(props) {

//     const navigate = useNavigate()

//     useEffect(() => {
//         localStorage.removeItem('jwt')
//         localStorage.removeItem('username')
//         localStorage.removeItem('userId')

//         props.onLogout()
//         navigate('/login')
//     })
//     return (
//         <h1>logout</h1>
//     )
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLogout: () => dispatch({type: 'ON_LOGOUT'})
//     }
// }

// export default connect(null, mapDispatchToProps)(Logout)