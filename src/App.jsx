// import './App.css';
import NavBar from "./MyComponents/NavBar";
import Banner from "./MyComponents/Banner";
import Footer from "./MyComponents/Footer";
import RstDetail from "./MyComponents/RstDetail";
import RstList from "./MyComponents/RstLst";
import AboutUs from "./MyComponents/AboutUs";
import Dashboard from "./MyComponents/Dashboard"
import {
  	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { useState } from 'react'

function App() {
	const [searchQuery, setSearchQuery] = useState('')
	const [user, setUser] = useState({})

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
				<Route exact path="/rstdetail/:id" children={<RstDetail/> } />
				<Route exact path="/about">
					<AboutUs />
				</Route>
				<Route exact path="/dashboard" children={<Dashboard user={user}/>} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
