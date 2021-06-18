import React from 'react';
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm"
function Footer() {
    return (
        <>
          
            <footer className="bg-footer site-footer clearfix">
                <div className="sidebar-container">
                    <div className="sidebar-inner">
                        <div className="widget-area clearfix">
                            <div className="widget widget_azh_widget">
                                <div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-3 foot-logo"> <img src="images/logo3.png" alt="logo" />
                                                <p className="hasimg">Gives the list of Restaurants, Ratings, Photo, and there Location.</p>
                                                <p className="hasimg">The top-rated restaurants, Review.</p>
                                            </div>
                                            <div className="col-sm-12 col-md-3">
                                                <h4 className="text-white">Support &amp; Help</h4>
                                                <ul className="two-columns">
                                                    <li><Link to="/" className="text-white">Dashboard</Link>
                                                    </li>
                        
                                                    <li><Link to="/" className="text-white">Ratings</Link>
                                                    </li>
                                                    <li><Link to="/" className="text-white">Contact Us</Link>
                                                    </li>
                                                    <li><Link to="/" className="text-white">About Us</Link>
                                                    </li>
                                                    <li><Link to="/" className="text-white">Pictures</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 col-md-3">
                                                <h4 className="text-white">Popular Services</h4>
                                                <ul className="two-columns">
                                                    <li><Link to="/" className="text-white">About Us</Link>
                                                    </li>
                                                    <li><Link to="/" className="text-white">Contact Us</Link>
                                                    </li>
                                                    <li><Link to="/" className="text-white">Cuisine type</Link>
                                                    </li>
                                                    <li><Link to="/" className="text-white">Restaurant</Link>
                                                    </li>
                                                    <li><Link to="/" className="text-white">Location</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-12 col-md-3">
                                                <h4 className="text-white">Address</h4>
                                                <p className="text-white">P.O. Tilwara Ghat, Near Bargi Hills, Jabalpur, Madhya Pradesh 482003</p>
                                                <p> <span className="foot-phone text-white">Phone: </span> <span className="foot-phone"><a href="tel: +91 8839483954" className="text-white">+91-8839483954</a></span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="foot-sec2">
                                    <div className="container">
                                        <div className="row">          
                                            <div className="col-sm-12 col-md-5 foot-social">
                                                <h4 className="text-white">Follow with us</h4>
                                                <p className="text-white">Join the thousands of other There are many variations of passages of Lorem Ipsum available</p>
                                                <ul>
                                                    <li><Link to="/"><i className="text-white fa fa-facebook" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="text-white fa fa-google-plus" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="text-white fa fa-twitter" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="text-white fa fa-linkedin" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="text-white fa fa-youtube" aria-hidden="true"></i></Link> </li>
                                                    <li><Link to="/"><i className="text-white fa fa-whatsapp" aria-hidden="true"></i></Link> </li>
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
                    <p>copyrights ©  &nbsp;&nbsp;All rights reserved. </p>
                </div>
            </section>
             <section>   
                 <ReviewForm />
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