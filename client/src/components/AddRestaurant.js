import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AddRestaurant() {

    const navigate = useNavigate()
    const [restaurant, setRestaurant] = useState([])

    const handleChange = (e) => {
        setRestaurant({
           ...restaurant,
           [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = () => {
        const userId = localStorage.getItem('userId')
    if(!restaurant.restaurantName || !restaurant.address1 || !restaurant.address2 || !restaurant.rating) {
        alert('Please fill out all textboxes.')
    } else {
    fetch('http://localhost:8080/api/add-restaurant', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            restaurantName: restaurant.restaurantName,
            address1: restaurant.address1,
            address2: restaurant.address2,
            rating: restaurant.rating,
            restaurantId: restaurant.restaurantId,
            userId: userId,
        })
    }).then(response => response.json())
    .then(result => {
        if(result.error) {
            // console.log(result.error)
            return
        } else {
            navigate('/display-list')
        }
    })
    }
}

    return (
        <div className='main-container'>
            
            <h1>Add Restaurant</h1>
            
            <div key={restaurant.id}>
                <div className='input'>
                    <label htmlFor='restaurantName'>Enter Restaurant Name: </label>
                    <input onChange={handleChange} name='restaurantName' id='restaurantName' type='text' placeholder='Name' />
                </div>
                <div className='input'>
                    <label>Enter Restaurant Address: </label>
                    <input onChange={handleChange} name='address1' type='text' placeholder='Intersection 1' />
                    <> , </>
                    <input onChange={handleChange} name='address2' type='text' placeholder='Intersection 2' />
                </div>
                <div className='input'>
                    <label htmlFor='rating'>Choose a rating from the following: </label>
                    <select onChange={handleChange} name='rating' id='rating'>
                        <option value="none"> Select an Option </option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <div className='button'>
                    <button onClick={handleSubmit}>Save Restaurant</button>
                </div>
            </div>
        </div>
    )
}


export default AddRestaurant