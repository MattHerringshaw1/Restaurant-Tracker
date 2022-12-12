import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


function DisplayRestaurant() {

    const [restaurants, setRestaurants] = useState([])
    const [restReview, setRestReview] = useState('')

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

    const handleAddReview = (id) => {
        fetch('http://localhost:8080/api/add-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                restReview: restReview,
                restId: id
            })
        })
        // console.log(id)
        window.location.reload(false)
    }

    // const handleDelete = (id) => {
    //     fetch('http://localhost:8080/api/delete-review', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id })
    //     })
    //     console.log(id)
    //     window.location.reload(false)
    // }

    const restaurantItems = restaurants.map(restaurant => {
        return <div key={restaurant.id}>
            <NavLink to = {`/${restaurant.restaurant_name}`}><li>{restaurant.restaurant_name}</li></NavLink>
            <textarea onChange={(e) => setRestReview(e.target.value)} type='text' name='restReview' placeholder='Enter Review Here'></textarea>
            <input type='hidden' name='restId' value={restaurant.id} />
            <br></br>
            <button onClick={() => handleAddReview(restaurant.id)}>Add Review</button>
            <br></br>
            {/* <button onClick={() => handleDelete(review.id)}>Delete Review</button>  */}
            </div>
    })

    // const reviewItems = restReview.map(review => {
    //     return <div key={review.id}>
    //         <li>{review.body}</li>
    //     </div>
    // })

    return(
        <>
            <h1>display restaurants added</h1>

            <ul>
                {restaurantItems}
                {/* {reviewItems} */}
            </ul>
        </>
    )
}

export default DisplayRestaurant