import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

function Login(props) {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if(!user.username || !user.password) {
            alert('Please fill out all textboxes.')
        } else {
        fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result => {

            if(result.success) {
                
                const token = result.token 
                const username = result.username 
                const userId = result.userId
                localStorage.setItem('jwt', token)
                localStorage.setItem('username', username)
                localStorage.setItem('userId', userId )

                props.onLogin(token)
                navigate('/display-list')
            
            }
            // console.log(result)
        })}
    }
    

    return (
        <div className='login-container'>
            <h1>User Login Below</h1>

            <input className='input' minLength={4} maxLength={8} onChange={handleChange} type='text' name='username' placeholder="Enter username" />
            <input className='input' minLength={4} maxLength={8} onChange={handleChange} type='password' name='password' placeholder="Enter password" />
            <button className='button' onClick={handleSubmit} >Login</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => dispatch({type: 'ON_LOGIN', payload: token})
    }
}

export default connect(null, mapDispatchToProps)(Login)