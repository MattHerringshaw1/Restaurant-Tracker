import { useState } from 'react'

function AddRestauranut(props) {

    const [restaurants, setRestaurants] = useState([])

    return (
        <>
            <h1>Add Restaurant</h1>

            <label for='restaurauntName'>Enter Name</label>
            <br></br>
            <input id='restaurauntName' type='text' placeHolder='Enter Restaurant Name' />
            <br></br>
            <label>Enter Restaurant Address</label>
            <br></br>
            <input name='intersectionOne' type='text' placeHolder='Enter Intersection 1' />
            <input name='intersectionTwo' type='text' placeHolder='Enter Intersection 2' />
            <br></br>
            <label for='rating'>Choose a rating from the following(1 being low and 5 being high):</label>
            <select id='rating'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>

            <br></br>
            <button>Save Restaurant</button>
        </>
    )
}

export default AddRestauranut