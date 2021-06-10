import React from 'react';

function Ratings() {
    return (
        <div className="hp-section">
            <div className="hp-sub-tit">
                <h4><span>Ratings</span> Suite Room</h4>
                <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue.
                    Donec id est consectetur, cursus tellus at, mattis lacus.</p>
            </div>
            <div className="hp-review">
                <div className="hp-review-left">
                    <div className="hp-review-left-1">
                        <div className="hp-review-left-11">Excellent</div>
                        <div className="hp-review-left-12">
                            <div className="hp-review-left-13"></div>
                        </div>
                    </div>
                    <div className="hp-review-left-1">
                        <div className="hp-review-left-11">Good</div>
                        <div className="hp-review-left-12">
                            <div className="hp-review-left-13 hp-review-left-Good"></div>
                        </div>
                    </div>
                    <div className="hp-review-left-1">
                        <div className="hp-review-left-11">Satisfactory</div>
                        <div className="hp-review-left-12">
                            <div className="hp-review-left-13 hp-review-left-satis"></div>
                        </div>
                    </div>
                    <div className="hp-review-left-1">
                        <div className="hp-review-left-11">Below Average</div>
                        <div className="hp-review-left-12">
                            <div className="hp-review-left-13 hp-review-left-below"></div>
                        </div>
                    </div>
                    <div className="hp-review-left-1">
                        <div className="hp-review-left-11">Below Average</div>
                        <div className="hp-review-left-12">
                            <div className="hp-review-left-13 hp-review-left-poor"></div>
                        </div>
                    </div>
                </div>
                <div className="hp-review-right">
                    <h5>Overall Ratings</h5>
                    <p><span>4.5 <i className="fa fa-star" aria-hidden="true"></i></span> based on 242 reviews</p>
                </div>
            </div>
        </div>
                           
    )
}

export default Ratings
