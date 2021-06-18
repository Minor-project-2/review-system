import React, {useState, useEffect} from 'react'
import UserActivity from "./UserActivity"
import Profile from "./Profile"
import {auth} from "../firebase"
import { Link } from 'react-router-dom'

const displayActiveTab = (tab, user)=>{
	if (tab === "activity") return <UserActivity user={user} />
	if  (tab === "profile") return <Profile user={user} />
}


function Dashboard({user}) {
	const bg_img = {
		"background": `url(${user.photoURL}) no-repeat  center`
	}

	const [activeTab, setActiveTab] = useState("profile")
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
							<a href="#activity" onClick={()=>setActiveTab('activity')}><img src="images/icon/db5.png" alt=""/> Activity</a>
						</li>
						<li>
							<a href="db-booking.html"><img src="images/icon/db2.png" alt=""/>Favourite</a>
						</li>
						<li>
							<a href="#profile" onClick={()=>setActiveTab('profile')}><img src="images/icon/db7.png" alt=""/> Profile</a>
						</li>
						<li>
							<Link to="/" onClick={()=>auth.signOut()} ><img src="images/icon/db8.png" alt=""/> Logout</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="db-cent">
				<div className="db-cent-1">
					<p>Hi {user.displayName},</p>
					<h4>Welcome to your dashboard</h4> </div>
				
					{
						displayActiveTab(activeTab, user)
					}

				</div>
			
		</div>
    )
}

export default Dashboard
