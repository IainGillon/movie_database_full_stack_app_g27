
import React from "react";
import RecentReviewItem from "./RecentReviewItem";


const RecentReviewsList = ({ allUsers }) => {


    const recentReviewList = []

    for (let user of allUsers) {
        for (let review of user.review) {
            let movieReview = {
                viewer: user.username,
                comment: review.comment,
                score: review.score,
                movieName: review.movie
            }
            recentReviewList.push(movieReview)
        }
    }


    const recentReviewNodes = recentReviewList.map((review, index) => {
        return <RecentReviewItem review={review} key={index} />
    })


    return (
        <>
            <h4>RECENT REVIEWS</h4>
            {recentReviewNodes}
        </>
    )
}


export default RecentReviewsList

