import React from 'react';

function RstLstItem({name}) {
    return (
        <div className="room">
            <div className="ribbon ribbon-top-left"><span>Featured</span>
            </div>
            <div className="r1 r-com"><img src="images/room/1.jpg" alt="" />
            </div>
            <div className="r2 r-com">
                <h4>{name}</h4>
                <div className="r2-ratt"> 
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i> 
                    <i className="fa fa-star"></i> 
                    <img src="images/h-trip.png" alt="" /> 
                    <span>Excellent  4.5 / 5</span> 
                </div>
                <ul>
                    <li>Max Adult : 3</li>
                    <li>Max Child : 1</li>
                </ul>
            </div>
            <div className="r3 r-com">
                <ul>
                    <li>Ironing facilities</li>
                    <li>Tea/Coffee maker</li>
                    <li>Air conditioning</li>
                    <li>Flat-screen TV</li>
                    <li>Wake-up service</li>
                </ul>
            </div>
            <div className="r4 r-com">
                <p>Price for 1 night</p>
                <p><span className="room-price-1">5000</span> <span className="room-price">$: 7000</span>
                </p>
                <p>Non Refundable</p>
            </div>
            <div className="r5 r-com">
                <div className="r2-available">Available</div>
                <p>Price for 1 night</p> <a href="room-details-block.html" className="inn-room-book">Book</a> 
            </div>
        </div>
    );
}

export default RstLstItem;