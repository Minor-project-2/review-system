import React from "react";
import { Link } from 'react-router-dom';

function ReviewItem({review}) {
  return (
    <li>
      <div className="lr-user-wr-img">
        <img src={review.reviewer_img_url} alt="" />
      </div>
      <div className="lr-user-wr-con">
        <h6>
          {review.reviewer_name}
          <span>
            {`${review.rating}`} <i className="fa fa-star" aria-hidden="true"></i>
          </span>
        </h6>
        <span className="lr-revi-date">19th January, 2017</span>
        <p>
          {review.review}
        </p>
        <ul>
          <li>
            <Link to="/">
              <span>Like</span>
              <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Dis-Like</span>
              <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Report</span>
              <i className="fa fa-flag-o" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Comments</span>
              <i className="fa fa-commenting-o" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Share Now</span>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default ReviewItem;
