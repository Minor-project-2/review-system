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
			<NavBar query={searchQuery} setQuery={setSearchQuery} />
			<Switch>
				<Route path="/rstdetail">
					<RstDetail data={data}/> 
				</Route>
				<Route path="/rstlist">
					<RstList query={searchQuery} /> 
				</Route>
				<Route path="/">
					<Banner />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
