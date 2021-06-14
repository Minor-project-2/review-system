import React from 'react';
import { Link } from "react-router-dom";

function RstLstItem({rest}) {
    const avg_rating = rest.avg_rating;

    const stars = (point) => {
        let star = [], temp = point % 1;
        point -= temp;
        let decimal = temp && true;
        for (let i = 1; i <= 5; i++) {
            if (i <= point){
                star.push(<i key={i} className="fa fa-star"></i>);

            } else if (decimal){
                star.push(<i key={i} className="fa fa-star-half-alt"></i>);
                decimal = false;
            } else {
                star.push(<i key={i} className="fa fa-star-o"></i>);
            }
        }
        return star;
    };

    const rating = (rate) => {
        // eslint-disable-next-line default-case
        switch (true) {
            case (rate <= 2):
                return 'Below Average';
            case (rate > 1 && rate <= 3):
                return 'Average';
            case (rate > 1 && rate <= 4):
                return 'good';
            case (rate > 1 && rate <= 5):
                return 'Excellent';
        }
    };
    
    return (
        <div className="room col-sm-6 col-md-6 col-lg-6" style = {{minHeight: "370px"}} >
            <div className="r1 r-com col-sm-6 col-md-6 col-lg-6">
                <img src={rest.image_url} alt="error" />
            </div>
            <div className="col-lg-6">
                <h4 style={{textTransform: "capitalize"}}>{rest.name}</h4>
                <div className="r2-ratt"> 
                    {stars(avg_rating)}
                    &nbsp;
                    <img src="images/h-trip.png" alt="" /> 
                    <span>{rating(avg_rating)} {avg_rating} / 5</span>
                </div>
                <ul>
                    <li>{rest.cuisine_type}</li>
                    <li>{rest.address}</li>
                    <li>Openin Hours: {rest.opening_hours}</li>
                    <li>Call: <a href={"tel: " + rest.contact}>+{rest.contact}</a></li>
                    <Link to={`/rstdetail/${rest.id}`} className="btn btn-custom" >Detail</Link>
                </ul>
            </div>
        </div>
    );
}

export default RstLstItem;