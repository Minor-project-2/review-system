import React from 'react';

function RstLstItem() {
    return (
        <div>
            <div className="room room-1">
                <div className="ribbon ribbon-top-left"><span>Featured</span> </div>
                <div className="r1 r-com r-com-1 r1-1"><img src="images/room/1.jpg" alt="" /> </div>
                <div className="r2 r-com r-com-1">
                    <h3>Master Suite</h3>
                    <h4>Review</h4>
                    <div className="r2-ratt"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <img src="images/h-trip.png" alt="" /> <span>Excellent  4.5 / 5</span> </div>
                    <ul>
                        <li>Max Adult : 3</li>
                        <li>Max Child : 1</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="r2-available r2-available-1">Available</div>
                </div>
                <div className="r3 r-com r-com-1">
                    <h4>Aminities</h4>
                    <ul>
                        <li>Ironing facilities</li>
                        <li>Tea/Coffee maker</li>
                        <li>Air conditioning</li>
                        <li>Flat-screen TV</li>
                        <li>Wake-up service</li>
                    </ul>
                </div>
                <div className="r4 r-com r-com-1">
                    <h4>Price</h4>
                    <p>Price for 1 night</p>
                    <p><span className="room-price-1">5000</span> <span className="room-price">Rs: 7000</span> </p>
                    <p>Non Refundable</p>
                </div>
                <div className="r5 r-com r-com-1 r5-1">
                    <p>Price for 1 night</p> <a href="room-details-block.html" className="inn-room-book">Book</a> </div>
            </div>
        </div>
    )
}

export default RstLstItem
