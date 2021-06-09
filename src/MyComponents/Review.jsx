import React from 'react'

function Review() {
    return (
        <div className="hp-section">
            <div className="hp-sub-tit">
                <h4><span>USER</span> REVIEWS</h4>
                <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</p>
            </div>
            <div className="lp-ur-all-rat">
                <ul>

                    <li>
                        <div className="lr-user-wr-img"> <img src="images/users/2.png" alt="" /> </div>
                        <div className="lr-user-wr-con">
                            <h6>Jacob Michael <span>4.5 <i className="fa fa-star" aria-hidden="true"></i></span></h6> <span className="lr-revi-date">19th January, 2017</span>
                            <p>Good service... nice and clean rooms... very good spread of buffet and friendly staffs. Located in heart of city and easy to reach any places in a short distance. </p>
                            <ul>
                                <li><a href="#!"><span>Like</span><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><span>Dis-Like</span><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><span>Report</span> <i className="fa fa-flag-o" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><span>Comments</span> <i className="fa fa-commenting-o" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><span>Share Now</span>  <i className="fa fa-facebook" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><i className="fa fa-google-plus" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><i className="fa fa-twitter" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><i className="fa fa-linkedin" aria-hidden="true"></i></a> </li>
                                <li><a href="#!"><i className="fa fa-youtube" aria-hidden="true"></i></a> </li>
                            </ul>
                        </div>
                    </li>
                </ul> <a className="waves-effect waves-light wr-re-btn" href="!#" data-toggle="modal" data-target="#commend"><i className="fa fa-edit"></i> Write Review</a> </div>
        </div>


    )
}

export default Review
