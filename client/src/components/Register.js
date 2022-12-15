import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Register() {

    const navigate = useNavigate()
    const [user, setUser] = useState([])

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
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: user.username,
                userPassword: user.password
            })
        }).then(response => response.json())
        .then(result => {
            if(result.error) {
                // console.log(result.error)
                return
            } else {
                navigate('/login')
            }
        
        })}
        }
    


    return (
    <>
        <h1>Register</h1>

        <input required minLength={4} maxLength={8} onChange={handleChange} type='text' name='username' placeholder="Enter username" />
        <input required minLength={4} maxLength={8} onChange={handleChange} type='text' name='password' placeholder="Enter password" />
        <button onClick={handleSubmit} >Create user</button>
    </>
    )
    
}


export default Register