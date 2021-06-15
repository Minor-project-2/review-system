import React from 'react';


function Ratings({avg_rating, rev_cnt}) {
    return (
        <div className="hp-section">
            <div className="hp-sub-tit">
                <h4><span>Rate</span> Your Experience</h4>
                <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue.
                    Donec id est consectetur, cursus tellus at, mattis lacus.</p>
            </div>
            <div className="hp-review">
                <div className="hp-review-left">
                   
                </div>
                <div className="hp-review-right">
                    <h5>Overall Ratings</h5>
                    <p><span>{avg_rating} <i className="fa fa-star" aria-hidden="true"></i></span> based on {rev_cnt} reviews</p>
                </div>
            </div>
        </div>        
    );
}

export default Ratings;