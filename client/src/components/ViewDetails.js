import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function ViewDetails() {

    const [restaurant, setRestaurant] = useState([])
    let {restaurantName} = useParams()
    console.log(restaurantName)

    const fetchRestaurant = () => {
        fetch('http://localhost:8080/api/view-restaurants')
        .then(response => response.json())
        .then(restaurant => {
            setRestaurant(restaurant)
        })
    }

    useEffect(() => {
        fetchRestaurant()
    }, [])

    const filteredRestaurant = restaurant.filter(foodPlace => {
        return foodPlace.restaurant_name === restaurantName })
        console.log(filteredRestaurant)

    const restaurantItem = filteredRestaurant.map(restaurant => {
        return <div key={restaurant.id}>
         <li>{restaurant.restaurant_name}</li>
         <li>Located in the intersection of: {restaurant.restaurant_address_1} and {restaurant.restaurant_address_2}</li>
         <li>Rating: {restaurant.restaurant_rating}</li>
         
        </div>
    })

    return (
        <>
            <h1>view details below</h1>

            <ul>{restaurantItem}</ul>

            <NavLink to = '/display-list'><button>Back</button></NavLink>
        </>
    )
}

export default ViewDetails