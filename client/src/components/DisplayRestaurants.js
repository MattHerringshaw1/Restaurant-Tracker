import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


function DisplayRestaurant() {

    const [restaurants, setRestaurants] = useState([])

    const fetchRestaurants = () => {
        fetch('http://localhost:8080/api/view-restaurants')
        .then(response => response.json())
        .then(restaurants => {
            setRestaurants(restaurants)
        })
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

    const handleDelete = (id) => {
        fetch('http://localhost:8080/api/delete-restaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        console.log(id)
        window.location.reload(false)
    }

    const restaurantItems = restaurants.map(restaurant => {
        return <div key={restaurant.id}>
         <NavLink to = {`/${restaurant.restaurant_name}`}><li>{restaurant.restaurant_name}</li></NavLink>
         <li>Rating: {restaurant.restaurant_rating}</li>
         <button onClick={() => handleDelete(restaurant.id)}>Delete</button> 
        </div>
    })

    return(
        <>
            <h1>display restaurants added</h1>

            <ul>
                {restaurantItems}
            </ul>
        </>
    )
}

export default DisplayRestaurant