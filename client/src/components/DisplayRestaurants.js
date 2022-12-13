import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


function DisplayRestaurant() {

    const [restaurants, setRestaurants] = useState([])
    const [restReview, setRestReview] = useState('')
    const [reviews, setReviews] = useState([])

    const fetchRestaurants = () => {
        fetch('http://localhost:8080/api/view-restaurants')
        .then(response => response.json())
        .then(restaurants => {
            setRestaurants(restaurants)
        })
    }

    const fetchReviews = () => {
        fetch('http://localhost:8080/api/view-reviews')
        .then(response => response.json())
        .then(reviews => {
            setReviews(reviews)
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

    // const handleDeleteReview = (id) => {
    //     // console.log(id)
    //     fetch('http://localhost:8080/api/delete-review', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id })
    //     })
    //     fetchReviews()
    // }

    const restaurantItems = restaurants.map(restaurant => {
        const reviewItems = reviews.filter(review => {
            return restaurant.id === review.restaurant_id
        })

        return <div key={restaurant.id}>
                <NavLink to = {`/${restaurant.restaurant_name}`}><li>{restaurant.restaurant_name}</li></NavLink>
                <textarea onChange={(e) => setRestReview(e.target.value)} type='text' name='restReview' placeholder='Enter Review Here'></textarea>
                <br></br>
                <button onClick={() => handleAddReview(restaurant.id)}>Add Review</button>
                <h4>Review/s:</h4>
                {reviewItems.map(review => {
                    return <div key={review.id}>
                    <li>{review.body}</li>
                    {/* <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button> */}
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
        <>
            <h1>display restaurants/reviews added</h1>
                <ul>       
                    {restaurantItems}
                    
                </ul>
        </>
    )
}

export default DisplayRestaurant