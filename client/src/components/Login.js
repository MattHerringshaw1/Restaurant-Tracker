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
        <>
            <h1>login</h1>

            <input minLength={4} maxLength={8} onChange={handleChange} type='text' name='username' placeholder="Enter username" />
            <input minLength={4} maxLength={8} onChange={handleChange} type='text' name='password' placeholder="Enter password" />
            <button onClick={handleSubmit} >Login</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => dispatch({type: 'ON_LOGIN', payload: token})
    }
}

export default connect(null, mapDispatchToProps)(Login)