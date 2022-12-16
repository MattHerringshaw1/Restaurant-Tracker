import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function ViewDetails() {

    const navigate = useNavigate()
    const [restaurant, setRestaurant] = useState([])
    let {restaurantName} = useParams()
    // console.log(restaurantName)

    const fetchRestaurant = () => {
        const token = localStorage.getItem('jwt')
        const userId = localStorage.getItem('userId')
        fetch('http://localhost:8080/api/view-restaurants', {
        method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'userId': `${userId}`
            }
        })
        .then(response => response.json())
        .then(result => {
            if(result.error) {
                console.log(result.error)
            } else {
            setRestaurant(result)
            }
        })
    }

    useEffect(() => {
        fetchRestaurant()
    }, [])

    const handleDelete = (id) => {
        fetch('http://localhost:8080/api/delete-restaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        // console.log(id)
        navigate('/display-list')
    }

    const filteredRestaurant = restaurant.filter(foodPlace => {
        return foodPlace.restaurant_name === restaurantName })
        // console.log(filteredRestaurant)

    const restaurantItem = filteredRestaurant.map(restaurant => {
        return <div key={restaurant.id}>
            <li><u>Restaurant Name</u>: {restaurant.restaurant_name}</li>
            <li><u>Located in the intersection of</u>: {restaurant.restaurant_address_1} and {restaurant.restaurant_address_2}</li>
            <li><u>Rating</u>: {restaurant.restaurant_rating}</li>
            <button onClick={() => handleDelete(restaurant.id)}>Delete Restaurant</button> 
        </div>
    })

    return (
        <div className='main-container'>
            <h1>View Restaurant Details Below</h1>
            <div className='input-view'>
                

                <ul>{restaurantItem}</ul>
            </div>
            <div className='button'>
                <NavLink to = '/display-list'><button>Back</button></NavLink>
            </div>
        </div>
    )
}

export default ViewDetails