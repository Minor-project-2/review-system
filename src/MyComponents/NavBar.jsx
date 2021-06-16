import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Signin from "./Signin";
import { auth } from "../firebase";

function NavBar({ query, setQuery, user, setUser }) {
    const [text, setText] = useState("");
    const history = useHistory();
    const logout_pc = (status) => {
        if (status) {
        return (
            <div className="dropdown">
                <span className="dropdown-button dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <img src={user.photoURL} width="30" className="circular-img" alt="error" /> <i className="fa fa-angle-down"></i>
                </span>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="#!" onClick={() => auth.signOut()}>Logout</Link></li>
                </ul>
            </div>
        );
        } else {
            return <Link to="#!" data-toggle="modal" data-target="#modal1">Login</Link>
        }
    };
    const logout_mob = (status) => {
        if (status) {
            return (
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="#!" onClick={() => auth.signOut()}>Logout</Link></li>
                </>
            );
        } else {
            return (<li><Link to="#!" data-toggle="modal" data-target="#modal1">Login</Link></li>);
        }
    };
    const Search = (e) => {
        e.preventDefault();
        if (!text) {
        console.log("Nothing to Search!!");
        } else {
        console.log(text);
        // props.searchResult(text);
        setQuery(text);
        setText("");
        history.push("/rstlist");
        }
    };
    return (
        <>
            <section>
                <div className="mm">
                    <div className="mm-inn">
                        <div className="col-sm-3 col-md-2 mm-logo hidden visible-lg visible-md visible-sm">
                            <Link to="/"><img src="images/logo3.png" alt="TheRestoGO" width="150" style={{position: 'relative', top: '-10px'}}/></Link>
                        </div>
                        <div className="col-sm-7 col-xs-10 col-md-8">
                                <form role="search" className="search-bar" onSubmit={ Search }>
                                    <div className="form-group pos-top-1">
                                        <input type="search" value={text} onChange={ (e) => {setText(e.target.value)} } className="form-control" />
                                    </div>
                                </form>
                            </div>
                        <div className="col-xs-2 mm-icon">
                            <span><i className="fa fa-bars show-menu" aria-hidden="true"></i></span>
                        </div>
                        <div className="mm-menu">
                            <div className="mm-close">
                                <span><i className="fa fa-times hide-menu" aria-hidden="true"></i></span>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link>
                                </li>
                                <li><Link to="/rstlist">Restaurants</Link>
                                </li>
                                <li><Link to="/about">About Us</Link>
                                </li>
                                {logout_mob(!user.isGuest)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="menu-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 logo">
                                <Link to="/"><img src="images/logo3.png" className="pos-top-2" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-5 col-md-4">
                                <form className="navbar-form search-bar" onSubmit={ Search } role="search">
                                    <div className="form-group">
                                        <input type="search" value={text} onChange={ (e) => {setText(e.target.value)} } className="form-control" placeholder="Search" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-6 menu-bar">
                                <ul>
                                    <li><Link to="/">Home</Link>
                                    </li>
                                    <li><Link to="/rstlist">Restaurants</Link>
                                    </li>
                                    <li><Link to="/about">About Us</Link>
                                    </li>
                                    <li>{logout_pc(!user.isGuest)}
							        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Signin setUser={setUser} />
        </>
    );
}

export default NavBar;
