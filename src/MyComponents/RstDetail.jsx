import React from 'react';
import Review from './Review';
import FoodMenu from './FoodMenu';
import Ratings from './Ratings';
import { Link } from 'react-router-dom';

function RstDetail(props) {
    return (
        <div>
            <div className="hp-banner">
                <img src="images/detailed-banner.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="hp-section">
                                <div className="hp-sub-tit">
                                    <h4><span>Master Suite</span> Room</h4>
                                    <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</p>
                                </div>
                                <div className="hp-amini">
                                    <p>Maecenas erat lorem, vulputate sed ex at, vehicula dignissim risus. Nullam non nisi congue elit cursus tempus. Nunc vel ante nec libero semper maximus. Donec cursus sed massa eget commodo. Phasellus semper neque id iaculis malesuada. Nulla efficitur dui vitae orci blandit tempor. Mauris sed venenatis nibh, sed sodales risus.</p>
                                    <p>Nam sit amet tortor in elit fermentum consectetur et sit amet eros. Sed varius velit at eros tempor sodales. Fusce at enim at lectus sollicitudin pharetra at in risus. Donec ut semper turpis. Maecenas lobortis ante ut eros scelerisque, at semper augue ullamcorper.</p>
                                </div>
                            </div>
                            <div className="hp-section">
                                <div className="hp-sub-tit">
                                    <h4><span>Aminitiese</span> Room</h4>
                                    <p>Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</p>
                                </div>
                                <div className="hp-amini">
                                    <ul>
                                        <li><img src="images/icon/a1.png" alt="" /> Elevator in building</li>
                                    </ul>
                                </div>
                            </div>
								<div class="hp-sub-tit">
									<h4><span>Overview</span> Room</h4>
									<p>Aliquam id tempor sem. Cras molestie risus et lobortis congue. Donec id est consectetur, cursus tellus at, mattis lacus.</p>
								</div>
								<div class="hp-over">
									<ul class="nav nav-tabs hp-over-nav">
										<li class="active">
											<Link data-toggle="tab" to="/" aria-expanded="false"><img src="images/icon/a9.png" alt=""/> <span class="tab-hide">Food Menu</span>
											</Link>
										</li>
										<li class="">
											<Link data-toggle="tab" to="/" aria-expanded="true"><img src="images/icon/a8.png" alt=""/> <span class="tab-hide">Overview</span>
											</Link>
										</li>
										<li class="">
											<Link data-toggle="tab" to="/" aria-expanded="false"><img src="images/icon/a10.png" alt=""/> <span class="tab-hide">Facilities</span>
											</Link>
										</li>
										<li class="">
											<Link data-toggle="tab" to="/" aria-expanded="false"><img src="images/icon/a11.png" alt=""/> <span class="tab-hide">Other Features</span>
											</Link>
										</li>
									</ul>
									<div class="tab-content">
                                        <div id="home" className="tab-pane fade tab-space active in">
										    {props.data.map((food)=>{
                                                return <FoodMenu data={food}/>
                                            })}
                                        </div>
										<div id="menu1" class="tab-pane fade tab-space">
											<div class="hp-main-overview">
												<ul>
													<li>Occupancy: <span>Max four Persons</span>
													</li>
													<li>Size : <span>800 sq. feet</span>
													</li>
													<li>View : <span>Sea or Garden view</span>
													</li>
													<li>Room Service : <span>Available per request</span>
													</li>
													<li>Terraces : <span>Balcony</span>
													</li>
													<li>Free Pickup Facility : <span>Yes</span>
													</li>
													<li>Internet Free <span>Yes</span>
													</li>
													<li>Gym : <span class="ov-yes">Yes</span>
													</li>
												</ul>
											</div>
										</div>
                                        <div id="menu2" class="tab-pane fade tab-space">
											<div class="row">
												<div class="col-md-6 hp-ov-fac"> <img src="images/hotel/1.jpg" alt=""/> </div>
												<div class="col-md-6">
													<p>Maecenas erat lorem, vulputate sed ex at, vehicula dignissim risus. Nullam non nisi congue elit cursus tempus. Nunc vel ante nec libero semper maximus. Donec cursus sed massa eget commodo. Phasellus semper neque id iaculis malesuada. Nulla efficitur dui vitae orci blandit tempor. Mauris sed venenatis nibh, sed sodales risus.</p>
													<p>Nam sit amet tortor in elit fermentum consectetur et sit amet eros. Sed varius velit at eros tempor sodales. Fusce at enim at lectus sollicitudin pharetra at in risus. Donec ut semper turpis. Maecenas lobortis ante ut eros scelerisque, at semper augue ullamcorper.</p>
												</div>
											</div>
										</div>
                                        <div id="menu3" class="tab-pane fade tab-space">
											<p>Maecenas erat lorem, vulputate sed ex at, vehicula dignissim risus. Nullam non nisi congue elit cursus tempus. Nunc vel ante nec libero semper maximus. Donec cursus sed massa eget commodo. Phasellus semper neque id iaculis malesuada. Nulla efficitur dui vitae orci blandit tempor. Mauris sed venenatis nibh, sed sodales risus.</p>
											<p>Nam sit amet tortor in elit fermentum consectetur et sit amet eros. Sed varius velit at eros tempor sodales. Fusce at enim at lectus sollicitudin pharetra at in risus. Donec ut semper turpis. Maecenas lobortis ante ut eros scelerisque, at semper augue ullamcorper.</p>
											<p>Maecenas erat lorem, vulputate sed ex at, vehicula dignissim risus. Nullam non nisi congue elit cursus tempus. Nunc vel ante nec libero semper maximus. Donec cursus sed massa eget commodo. Phasellus semper neque id iaculis malesuada. Nulla efficitur dui vitae orci blandit tempor. Mauris sed venenatis nibh, sed sodales risus.</p>
											<p>Nam sit amet tortor in elit fermentum consectetur et sit amet eros. Sed varius velit at eros tempor sodales. Fusce at enim at lectus sollicitudin pharetra at in risus. Donec ut semper turpis. Maecenas lobortis ante ut eros scelerisque, at semper augue ullamcorper.</p>
										</div>
									</div>
								</div>
                            <Ratings />
                            <Review />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="hp-call hp-right-com">
                            <div className="hp-call-in"> <img src="images/icon/dbc4.png" alt="" />
                                <h3><span>Check Availability. Call us!</span> +01 4214 4214</h3> <small>We are available 24/7 Monday to Sunday</small> 
                                <Link to="/">Call Now</Link> 
                            </div>
                        </div>
                        <div className="hp-book hp-right-com">
                            <div className="hp-book-in">
                                <button className="like-button"><i className="fa fa-heart-o"></i> Bookmark this listing</button> <span>159 people bookmarked this place</span>
                                <ul>
                                    <li><Link to="/"><i className="fa fa-facebook"></i> Share</Link>
                                    </li>
                                    <li><Link to="/"><i className="fa fa-twitter"></i> Tweet</Link>
                                    </li>
                                    <li><Link to="/"><i className="fa fa-google-plus"></i> Share</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hp-card hp-right-com">
                            <div className="hp-card-in">
                                <h3>We Accept</h3> <span>159 people bookmarked this place</span> <img src="images/card.png" alt="" /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RstDetail
