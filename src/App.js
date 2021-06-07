import './App.css';
import { NavBar } from "./MyComponents/NavBar";
import { Banner } from "./MyComponents/Banner";
import { Footer } from "./MyComponents/Footer";
import {
  	BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
} from "react-router-dom";

function App() {
	return (
		<Router>
			<NavBar />
			<Banner />
			<Footer />
		</Router>
	);
}

export default App;
