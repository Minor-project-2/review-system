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

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/rstdetail">
					<RstDetail /> 
				</Route>
				<Route path="/rstlist">
					<RstList /> 
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
