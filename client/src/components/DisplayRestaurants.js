import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


function DisplayRestaurant() {

    const [restaurants, setRestaurants] = useState([])
    const [restReview, setRestReview] = useState('')
    const [reviews, setReviews] = useState([])

    const fetchRestaurants = () => {
        const token = localStorage.getItem('jwt')
        let userId = localStorage.getItem('userId')
        fetch('http://localhost:8080/api/view-restaurants', {
        method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'userId': `${userId}` 
            },
            // body: JSON.stringify({ userId })
        })
        .then(response => response.json())
        .then(result => {
            if(result.error) {
                console.log(result.error)
            } else {
            setRestaurants(result)
            }
        })
    }

    const fetchReviews = () => {
        const token = localStorage.getItem('jwt')

        fetch('http://localhost:8080/api/view-reviews', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(result1 => {
            if(result1.error) {
                console.log(result1.error)
            } else {
            setReviews(result1)
            }
        })
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

    useEffect(() => {
        fetchReviews()
    }, [])

    const handleAddReview = (id) => {
        // console.log(id)
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
        fetchReviews()
        // window.location.reload(false)
    }

    const handleDeleteReview = (id) => {
        // console.log(id)
        
        fetch('http://localhost:8080/api/delete-review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        fetchReviews()
    }

    const restaurantItems = restaurants.map(restaurant => {
        const reviewItems = reviews.filter(review => {
            return restaurant.id === review.restaurant_id
        })

        return <div key={restaurant.id}>
                <h1><NavLink to = {`/${restaurant.restaurant_name}`}><li>{restaurant.restaurant_name}</li></NavLink></h1>
                <textarea onChange={(e) => setRestReview(e.target.value)} type='text' name='restReview' placeholder='Enter Review Here'></textarea>
                <br></br>
                <button onClick={() => handleAddReview(restaurant.id)}>Add Review</button>
                <h4>Review/s:</h4>
                {reviewItems.map(review => {
                    return <div key={review.id}>
                    <li>{review.body}</li>
                    <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
                    </div>
                })}
                <br></br>
            </div>
    })

    // const filteredReview = reviews.filter(foodReview => {
    //     return foodReview.restaurant_id === restId })
        // console.log(filteredReview)

    // const reviewItems = filteredReview.map(review => {
    //     return <div key={review.id}>
    //         <li>Review: {review.body}</li>
    //     </div>
    // })

    return (
        <div className='main-container'>
            <h1>Your List!</h1>
                <ul>       
                    {restaurantItems}
                    
                </ul>
        </div>
    )
}

export default DisplayRestaurant