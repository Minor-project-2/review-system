import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <section>
                <div className="hom-footer-section">
                    <div className="container">
                        <div className="row">
                            <div className="foot-com foot-1">
                                <ul>
                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                    </li>
                                    <li><Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                                    </li>
                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="foot-com foot-2">
                                <h5>Phone: (+404) 142 21 23 78</h5> 
                            </div>
                            <div className="foot-com foot-3">
                                <Link className="waves-effect waves-light" to="/">room reservation</Link> 
                            </div>
                            <div className="foot-com foot-4">
                                <Link to="/"><img src="images/card.png" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer clearfix">
                <div className="sidebar-container">
                    <div className="sidebar-inner">
                        <div className="widget-area clearfix">
                            <div className="widget widget_azh_widget">
                                <div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-3 foot-logo"> <img src="images/logo1.png" alt="logo" />
                                                <p className="hasimg">Hotels worldwide incl. Infos, Ratings and Photos. Make your Hotel Reservation cheap.</p>
                                                <p className="hasimg">The top-rated hotel booking services.</p>
                                            </div>
                                            <div className="col-sm-12 col-md-3">
                                                <h4>Support &amp; Help</h4>
                                                <ul className="two-columns">
                                                    <li><Link to="/">Dashboard</Link>
                                                    </li>
                                                    <li><Link to="/">DB Activity</Link>
                                                    </li>
                                                    <li><Link to="/">Booking</Link>
                                                    </li>
                                                    <li><Link to="/">Contact Us</Link>
                                                    </li>
                                                    <li><Link to="/">About Us</Link>
                                                    </li>
                                                    <li><Link to="/">Aminities</Link>
                                                    </li>
                                                    <li><Link to="/">Blog</Link>
                                                    </li>
                                                    <li><Link to="/">Food Menu</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 col-md-3">
                                                <h4>Popular Services</h4>
                                                <ul className="two-columns">
                                                    <li><Link to="/">Our Hotels</Link>
                                                    </li>
                                                    <li><Link to="/">About Us</Link>
                                                    </li>
                                                    <li><Link to="/">Contact Us</Link>
                                                    </li>
                                                    <li><Link to="/">Master Suite</Link>
                                                    </li>
                                                    <li><Link to="/">Mini-Suite</Link>
                                                    </li>
                                                    <li><Link to="/">Ultra Deluxe</Link>
                                                    </li>
                                                    <li><Link to="/">Luxury Room</Link>
                                                    </li>
                                                    <li><Link to="/">Normal Room</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 col-md-3">
                                                <h4>Address</h4>
                                                <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport</p>
                                                <p> <span className="foot-phone">Phone: </span> <span className="foot-phone">+01 1245 2541</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot-sec2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-3">
                                                <h4>Payment Options</h4>
                                                <p className="hasimg"> <img src="images/payment.png" alt="payment"/> </p>
                                            </div>
                                            <div className="col-sm-12 col-md-4">
                                                <h4>Subscribe Now</h4>
                                                <form>
                                                    <ul className="foot-subsc">
                                                        <li>
                                                            <input type="text" placeholder="Enter your email id" /> </li>
                                                        <li>
                                                            <input type="submit" value="submit" /> </li>
                                                    </ul>
                                                </form>
                                            </div>
                                            <div className="col-sm-12 col-md-5 foot-social">
                                                <h4>Follow with us</h4>
                                                <p>Join the thousands of other There are many variations of passages of Lorem Ipsum available</p>
                                                <ul>
                                                    <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="fa fa-google-plus" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="fa fa-youtube" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className="copy">
                <div className="container">
                    <p>copyrights © 2017 RN53Themes.net. &nbsp;&nbsp;All rights reserved. </p>
                </div>
            </section>
             <section>   
                <div id="modal1" className="modal fade" role="dialog">
                    <div className="log-in-pop">
                        <div className="log-in-pop-left">
                            <h1>Hello... <span>name</span></h1>
                            <p>Don't have an account? Create your account. It's take less then a minutes</p>
                            <h4>Login with social media</h4>
                            <ul>
                                <li><Link to="/"><i className="fa fa-facebook"></i> Facebook</Link>
                                </li>
                                <li><Link to="/"><i className="fa fa-google"></i> Google+</Link>
                                </li>
                                <li><Link to="/"><i className="fa fa-twitter"></i> Twitter</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="log-in-pop-right">
                            <Link to="/" className="pop-close" data-dismiss="modal"><img src="images/cancel.png" alt="" />
                            </Link>
                            <h4>Login</h4>
                            <p>Don't have an account? Create your account. It's take less then a minutes</p>
                            <form className="s12">
                                <div>
                                    <div className="input-field s12">
                                        <input type="text" data-ng-model="name" className="validate" />
                                        <label>User name</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s12">
                                        <input type="password" className="validate" />
                                        <label>Password</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="s12 log-ch-bx">
                                        <p>
                                            <input type="checkbox" id="test5" />
                                            <label htmlFor="test5">Remember me</label>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s4">
                                        <input type="submit" value="Login" className="waves-effect waves-light log-in-btn" /> 
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s12"> <Link to="/" data-dismiss="modal" data-toggle="modal" data-target="#modal3">Forgot password</Link> | <Link to="/" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="modal2" className="modal fade" role="dialog">
                    <div className="log-in-pop">
                        <div className="log-in-pop-left">
                            <h1>Hello... <span>name1</span></h1>
                            <p>Don't have an account? Create your account. It's take less then a minutes</p>
                            <h4>Login with social media</h4>
                            <ul>
                                <li><Link to="/"><i className="fa fa-facebook"></i> Facebook</Link>
                                </li>
                                <li><Link to="/"><i className="fa fa-google"></i> Google+</Link>
                                </li>
                                <li><Link to="/"><i className="fa fa-twitter"></i> Twitter</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="log-in-pop-right">
                            <Link to="/" className="pop-close" data-dismiss="modal"><img src="images/cancel.png" alt="" />
                            </Link>
                            <h4>Create an Account</h4>
                            <p>Don't have an account? Create your account. It's take less then a minutes</p>
                            <form className="s12">
                                <div>
                                    <div className="input-field s12">
                                        <input type="text" data-ng-model="name1" className="validate" />
                                        <label>User name</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s12">
                                        <input type="email" className="validate" />
                                        <label>Email id</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s12">
                                        <input type="password" className="validate" />
                                        <label>Password</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s12">
                                        <input type="password" className="validate" />
                                        <label>Confirm password</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s4">
                                        <input type="submit" value="Register" className="waves-effect waves-light log-in-btn" /> 
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s12"> <Link to="/" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id="modal3" className="modal fade" role="dialog">
                    <div className="log-in-pop">
                        <div className="log-in-pop-left">
                            <h1>Hello... <span>name3</span></h1>
                            <p>Don't have an account? Create your account. It's take less then a minutes</p>
                            <h4>Login with social media</h4>
                            <ul>
                                <li><Link to="/"><i className="fa fa-facebook"></i> Facebook</Link>
                                </li>
                                <li><Link to="/"><i className="fa fa-google"></i> Google+</Link>
                                </li>
                                <li><Link to="/"><i className="fa fa-twitter"></i> Twitter</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="log-in-pop-right">
                            <Link to="/" className="pop-close" data-dismiss="modal"><img src="images/cancel.png" alt="" />
                            </Link>
                            <h4>Forgot password</h4>
                            <p>Don't have an account? Create your account. It's take less then a minutes</p>
                            <form className="s12">
                                <div>
                                    <div className="input-field s12">
                                        <input type="text" data-ng-model="name3" className="validate" />
                                        <label>User name or email id</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s4">
                                        <input type="submit" value="Submit" className="waves-effect waves-light log-in-btn" /> 
                                    </div>
                                </div>
                                <div>
                                    <div className="input-field s12"> <Link to="/" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> | <Link to="/" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;