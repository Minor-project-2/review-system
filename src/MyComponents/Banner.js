import React from 'react'
import { Link } from "react-router-dom";

export const Banner = () => {
    return (
        <>
            <section>
				<div className="slider fullscreen">
					<ul className="slides">
						<li> 
							<img src="images/slider/1.jpg" alt="" />
							<div className="caption center-align slid-cap">
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
								<h2>This is our big Tagline!</h2>
								<p>Mauris non placerat nulla. Sed vestibulum quam mauris, et malesuada tortor venenatis at.
								   Aenean euismod sem porta est consectetur posuere. Praesent nisi velit, porttitor ut imperdiet a, 
								   pellentesque id mi.</p> 
								<Link to="#!" className="waves-effect waves-light">Booking</Link> 
								<Link to="#!" className="waves-effect waves-light">Booking</Link> 
							</div>
						</li>
						<li> 
							<img src="images/slider/2.jpg" alt="" />
							<div className="caption center-align slid-cap">
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
								<h2>This is our big Tagline!</h2>
								<p>Mauris non placerat nulla. Sed vestibulum quam mauris, et malesuada tortor venenatis at.
								   Aenean euismod sem porta est consectetur posuere. Praesent nisi velit, porttitor ut imperdiet a, 
								   pellentesque id mi.</p> 
								<Link to="#!" className="waves-effect waves-light">Booking</Link> 
								<Link to="#!" className="waves-effect waves-light">Booking</Link> 
							</div>
						</li>
						<li>  
							<img src="images/slider/3.jpg" alt="" />
							<div className="caption center-align slid-cap">
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
								<h2>This is our big Tagline!</h2>
								<p>Mauris non placerat nulla. Sed vestibulum quam mauris, et malesuada tortor venenatis at.
								   Aenean euismod sem porta est consectetur posuere. Praesent nisi velit, porttitor ut imperdiet a, 
								   pellentesque id mi.</p> 
								<Link to="#!" className="waves-effect waves-light">Booking</Link> 
								<Link to="#!" className="waves-effect waves-light">Booking</Link> 
							</div>
						</li>
						<li> 
							<img src="images/slider/4.jpg" alt="" />
							<div className="caption center-align slid-cap">
								<h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
								<h2>This is our big Tagline!</h2>
								<p>Mauris non placerat nulla. Sed vestibulum quam mauris, et malesuada tortor venenatis at.Aenean euismod sem porta est consectetur posuere. Praesent nisi velit, porttitor ut imperdiet a, pellentesque id mi.</p> <Link className="waves-effect waves-light">Booking</Link> <Link className="waves-effect waves-light" >Booking</Link> 
							</div>
						</li>
					</ul>
				</div>
            </section>
        </>
    )
}
