import React, {useState, useEffect} from 'react'
import {db} from "../firebase"

function Dashboard({user}) {
	const bg_img = {
		"background": `url(${user.photoURL}) no-repeat  center`
	}
	
    return (
        <div className="dashboard">
			<div className="db-left">
				<div className="db-left-1" style={bg_img}>
					<h4>{user.displayName}</h4>
					<p>{user.email}</p>
				</div>
				<div className="db-left-2">
					<ul>
						<li>
							<a href="dashboard.html"><img src="images/icon/db1.png" alt=""/> All</a>
						</li>
						<li>
							<a href="db-booking.html"><img src="images/icon/db2.png" alt=""/> My Bookings</a>
						</li>
						<li>
							<a href="db-new-booking.html"><img src="images/icon/db3.png" alt=""/> New Booking</a>
						</li>
						<li>
							<a href="db-event.html"><img src="images/icon/db4.png" alt=""/> Event</a>
						</li>
						<li>
							<a href="db-activity.html"><img src="images/icon/db5.png" alt=""/> Activity</a>
						</li>
						<li>
							<a href="db-profile.html"><img src="images/icon/db7.png" alt=""/> Profile</a>
						</li>
						<li>
							<a href="#"><img src="images/icon/db6.png" alt=""/> Payments</a>
						</li>
						<li>
							<a href="#"><img src="images/icon/db8.png" alt=""/> Logout</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="db-cent">
				<div className="db-cent-1">
					<p>Hi {user.displayName},</p>
					<h4>Welcome to your dashboard</h4> </div>
				
					

				</div>
			
		</div>
    )
}

export default Dashboard
