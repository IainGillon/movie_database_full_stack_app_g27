
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const reviewList = (({reviews}) => {
    return(
        <div id="review-list">
        <ul>
        {reviews.map(review => {
            return(
                <li key={review.name}>{review.name} {review.text} </li>
            )
        })}

        </ul>

        </div>
    )

});

