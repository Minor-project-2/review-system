import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {db} from '../firebase'
import ReviewItem from './ReviewItem'

function Review({res_id}) {    

    const [reviews, setReviews] = useState([])

    const fetchRestaurant = async()=>{   	
		
        // fetching restaurants reviews
        const revQuery = db.collection("reviews").where("res_id", "==", res_id).limit(5);
        // const revQuery = db.collection("reviews").where("rating", "==", 4);
        const revResponse = await  revQuery.get();
        const revData = revResponse.docs.map(doc=>{
            return {id: doc.id, ...doc.data()}
        });
        setReviews(revData);
        console.log(revData)

	};
	useEffect(() => {
		fetchRestaurant();
	}, []);
    return (
        <div className="hp-section">
            <div className="hp-sub-tit">
                <h4><span>USER</span> REVIEWS</h4>
                <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</p>
            </div>
            <div className="lp-ur-all-rat">
                <ul>
                    <Link className="waves-effect waves-light wr-re-btn" to="#" data-toggle="modal" data-target="#commend"><i className="fa fa-edit"></i> Write Review</Link> 
                    {reviews && reviews.map(review=> <ReviewItem key={review.id} review={review} /> )}
                </ul> 
            </div>
        </div>
    );
}

export default Review;
