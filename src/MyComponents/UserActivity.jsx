import React, {useState, useEffect} from "react";
import {db} from "../firebase"
function UserActivity({user}) {
  
    const [reviews, setReviews] = useState([])

    const fetchReview = async(user)=>{   	
		
		if (user.uid === undefined) return null
        // fetching restaurants reviews
        const revQuery = db.collection("reviews").where("uid", "==", user.uid).limit(5);
        const revResponse = await  revQuery.get();
        const revData = revResponse.docs.map(doc=>{
            return {id: doc.id, ...doc.data()}
        });
        setReviews(revData);
        console.log(reviews)

	};
	useEffect(() => {		
		fetchReview(user);
	}, [user]);
  return (
    <div className="db-cent-3">
      <div className="db-cent-acti">
        <div className="db-title">
          <h3>
            <img src="images/icon/dbc1.png" alt="" /> My Activity
          </h3>
        </div>

        <ul>
          {reviews &&
            reviews.map((review, key=review.id) => {
              
              return (
                <li>
                  <div className="db-cent-wr-img">
                    
                    <img src={user.photoURL} alt="" />
                  </div>
                  <div className="db-cent-wr-con">
                    <h6>Restaurant name</h6>
                    <span className="lr-revi-date">21th July, 2016</span>
                    <p>{review.review}</p>
                    <ul>
                      <li>
                        <a href="#!">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i
                            className="fa fa-google-plus"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default UserActivity;
