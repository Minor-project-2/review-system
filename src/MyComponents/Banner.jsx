import React from 'react';
import { Link } from "react-router-dom";

function Banner () {
    return (
		<section>
			<div className="slider fullscreen">
				<ul className="slides">
					<li> 
						<img src="images/slider/1.jpg" alt="" />
						<div className="caption center-align slid-cap">
							<h5 className="light grey-text text-lighten-3">We care for your precious time.</h5>
							<h2>You can find your favourite restaurants here.</h2>
							<p>Here we gives the way to find your favourite Cuisine, Reataurants, and its Location to give you the best experience </p> 
							
						</div>
					</li>
					<li> 
						<img src="images/slider/2.jpg" alt="" />
						<div className="caption center-align slid-cap">
							<h5 className="light grey-text text-lighten-3">We care for your precious time.</h5>
							<h2>You can find your favourite restaurants here.</h2>
							<p>Here we gives the way to find your favourite Cuisine, Reataurants, and its Location to give you the best experience.</p> 
							
						</div>
					</li>
					<li>  
						<img src="images/slider/3.jpg" alt="" />
						<div className="caption center-align slid-cap">
							<h5 className="light grey-text text-lighten-3">We care for your precious time.</h5>
							<h2>You can find your favourite restaurants here.</h2>
							<p>Here we gives the way to find your favourite Cuisine, Reataurants, and its Location to give you the best experience.</p> 
							
							
						</div>
					</li>
					<li> 
						<img src="images/slider/4.jpg" alt="" />
						<div className="caption center-align slid-cap">
							<h5 className="light grey-text text-lighten-3">We care for your precious time.</h5>
							<h2>You can find your favourite restaurants here.</h2>
							<p>Here we gives the way to find your favourite Cuisine, Reataurants, and its Location to give you the best experience.</p> 
							
						</div>
					</li>
				</ul>
			</div>
		</section>
    );
}

export default Banner;