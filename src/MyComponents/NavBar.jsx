import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <section>
                <div className="mm">
                    <div className="mm-inn">
                        <div className="col-sm-3 col-md-2 mm-logo hidden visible-lg visible-md visible-sm">
                            <Link to="/"><img src="images/logo.png" alt="" /></Link>
                        </div>
                        <div className="col-sm-7 col-xs-10 col-md-8">
                                <form role="search">
                                    <div className="form-group pos-top-1">
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </form>
                            </div>
                        <div className="col-sm-2 col-xs-2 col-md-2 mm-icon">
                            <span><i className="fa fa-bars show-menu" aria-hidden="true"></i></span>
                        </div>
                        <div className="mm-menu">
                            <div className="mm-close">
                                <span><i className="fa fa-times hide-menu" aria-hidden="true"></i></span>
                            </div>
                            <ul>
                                <li><Link to="/">Home</Link>
                                </li>
                                <li><Link to="/rstdetail">Dashboard</Link>
                                </li>
                                <li><Link to="/">About Us</Link>
                                </li>
                                <li><Link to="/">Contact Us</Link>
                                </li>
                                <li><Link to="/">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="menu-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 logo">
                                <Link to="/"><img src="images/logo.png" className="pos-top-4" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-5 col-md-4">
                                <form className="navbar-form search-bar" role="search">
                                    <div className="form-group">
                                        <input type="search" className="form-control" placeholder="Search" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-6 menu-bar">
                                <ul>
                                    <li><Link to="/">Home</Link>
                                    </li>
                                    <li><Link to="/rstdetail">Dashboard</Link>
                                    </li>
                                    <li><Link to="/rstlist">About Us</Link>
                                    </li>
                                    <li><Link to="/">Contact Us</Link>
                                    </li>
                                    <li><Link to="/">Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NavBar;