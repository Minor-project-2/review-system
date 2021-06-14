import React, {useState, useEffect} from 'react';
import RstLstItem from "./RstLstItem";
import firebase from '../firebase'


function RstLst({query}) {
	const db = firebase.firestore()
	const [restaurants, setRestaurants] = useState([])

	const fetchRestaurants = async()=>{
		const response = db.collection("restaurants");
		const data = await response.limit(6).get();
		const newData = data.docs.map(doc=>{
			return{id: doc.id, ...doc.data()};		
		});
		setRestaurants(newData)
		// console.log(restaurants);
	};
	useEffect(() => {
		fetchRestaurants();
	}, []);
	return (
        <div className="inn-body-section pad-bot-55">
			<div className="container">
				<div className="row">
					<div className="page-head">
						<h2>{query}</h2>
						<div className="head-title">
							<div className="hl-1"></div>
							<div className="hl-2"></div>
							<div className="hl-3"></div>
						</div>
						<p>{query}</p>
					</div>
					{restaurants.length ? restaurants.map(restaurant => <RstLstItem key={restaurant.id} rest={restaurant} />): "no restaurants"}
				</div>
			</div>
		</div>
    );
}

export default RstLst;
