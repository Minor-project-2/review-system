// import './App.css';
import NavBar from "./MyComponents/NavBar";
import Banner from "./MyComponents/Banner";
import Footer from "./MyComponents/Footer";
import RstDetail from "./MyComponents/RstDetail";
import RstList from "./MyComponents/RstLst";
import {
  	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { useState } from 'react'

function App() {
	const [searchQuery, setSearchQuery] = useState('')
	const [user, setUser] = useState({})
	const data = [
		{
			sno: 1,
			title: "salted fried chicken 1",
			desc: "Tomato soup with croutons, small ceasar salad, apple juice",
			price: "$45"
		},
		{
			sno: 2,
			title: "salted fried chicken 2",
			desc: "Tomato soup with croutons, small ceasar salad, apple juice",
			price: "$45"
		},
		{
			sno: 3,
			title: "salted fried chicken 3",
			desc: "Tomato soup with croutons, small ceasar salad, apple juice",
			price: "$45"
		}
	];

	return (
		<Router>
			<NavBar query={searchQuery} setQuery={setSearchQuery} user={user} setUser={setUser}/>
			<Switch>
				<Route exact path="/">
					<Banner />
				</Route>
				<Route exact path="/rstlist">
					<RstList query={searchQuery} /> 
				</Route>
				<Route exact path="/rstdetail/:id" children={<RstDetail data={data}/> } />
					
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
