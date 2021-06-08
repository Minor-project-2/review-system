import React from 'react'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <section>
            <div className="mm">
                <div className="mm-inn">
                    <div className="mm-logo">
                        <Link to="main.html"><img src="images/logo.png" alt="" /></Link>
                    </div>
                    <div className="mm-icon"><span><i className="fa fa-bars show-menu" aria-hidden="true"></i></span>
                    </div>
                    <div className="mm-menu">
                        <div className="mm-close"><span><i className="fa fa-times hide-menu" aria-hidden="true"></i></span>
                        </div>
                        <ul>
                            <li><Link to="main.html">Home - Default</Link>
                            </li>
                            <li><Link to="index-1.html">Home - Reservation</Link>
                            </li>
                            <li><Link to="index-2.html">Home - FullSlider</Link>
                            </li>
                            <li><Link to="index-3.html">Home - Block Color</Link>
                            </li>
                            <li><Link to="room-details.html">Room Details</Link>
                            </li>
                            <li><Link to="room-details-block.html">Room Details Block</Link>
                            </li>
                            <li><Link to="hotel-details.html">Hotel Details</Link>
                            </li>
                            <li><Link to="hotel-detail.html">Hotel Details - 1</Link>
                            </li>
                            <li><Link to="about-us.html">About Us</Link>
                            </li>
                            <li><Link to="aminities.html">Aminities</Link>
                            </li>
                            <li><Link to="aminities1.html">Aminities - 1</Link>
                            </li>
                            <li><Link to="menu.html">Food Menu</Link>
                            </li>
                            <li><Link to="menu1.html">Food Menu - 1</Link>
                            </li>
                            <li><Link to="blog.html">Blog</Link>
                            </li>
                            <li><Link to="blog-inner.html">Blog Inner</Link>
                            </li>
                            <li><Link to="dashboard.html">User Dashboard</Link>
                            </li>
                            <li><Link to="db-activity.html">DB Activity</Link>
                            </li>
                            <li><Link to="db-booking.html">DB-Booking</Link>
                            </li>
                            <li><Link to="db-event.html">DB-Event</Link>
                            </li>
                            <li><Link to="db-new-booking.html">DB New Booking</Link>
                            </li>
                            <li><Link to="booking.html">Booking</Link>
                            </li>
                            <li><Link to="collapsible.html">Collapsible</Link>
                            </li>
                            <li><Link to="events.html">Events</Link>
                            </li>
                            <li><Link to="form-fields.html">Form Fields</Link>
                            </li>
                            <li><Link to="preloading.html">Preloading</Link>
                            </li>
                            <li><Link to="gallery.html">Gallery</Link>
                            </li>
                            <li><Link to="gallery1.html">Gallery - 1</Link>
                            </li>
                            <li><Link to="gallery2.html">Gallery - 2</Link>
                            </li>
                            <li><Link to="detail.html">Room Detail</Link>
                            </li>
                            <li><Link to="all-rooms.html">All Rooms</Link>
                            </li>
                            <li><Link to="all-rooms1.html">All Rooms - 1</Link>
                            </li>
                            <li><Link to="services.html">Services</Link>
                            </li>
                            <li><Link to="services1.html">Services - 1</Link>
                            </li>
                            <li><Link to="typho-grid.html">Grid Layout</Link>
                            </li>
                            <li><Link to="typo-alert.html">Alert Messages</Link>
                            </li>
                            <li><Link to="typo-all-head.html">All Headers</Link>
                            </li>
                            <li><Link to="typo-badges-labels.html">Labels</Link>
                            </li>
                            <li><Link to="typo-buttons.html">Buttons</Link>
                            </li>
                            <li><Link to="typo-pagination.html">Pagination</Link>
                            </li>
                            <li><Link to="typo-progressbar.html">Progressbar</Link>
                            </li>
                            <li><Link to="typo-slider.html">Image Sliders</Link>
                            </li>
                            <li><Link to="typo-table.html">Table</Link>
                            </li>
                            <li><Link to="typo-buttons.html">Buttons</Link>
                            </li>
                            <li><Link to="typo-pagination.html">Pagination</Link>
                            </li>
                            <li><Link to="typo-progressbar.html">Progressbar</Link>
                            </li>
                            <li><Link to="sitemap.html">Sitemap</Link>
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
                            <div className="top-bar">
                                <ul>
                                    <li><Link className='dropdown-button' href="#!" data-activates='dropdown1'> My Account <i className="fa fa-angle-down"></i></Link>
                                    </li>
                                    <li><Link to="all-hotels.html">Our Hotels</Link>
                                    </li>
                                    <li><Link to="about-us.html">About Us</Link>
                                    </li>
                                    <li><Link to="contact-us.html">Contact Us</Link>
                                    </li>
                                    <li><Link className='dropdown-button' href="#!" data-activates='dropdown2'>Language <i className="fa fa-angle-down"></i></Link>
                                    </li>
                                    <li><Link to="#!">Toll Free No: 1800 102 7275</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="all-drop-down">
                                <ul id='dropdown1' className='dropdown-content drop-con-man'>
                                    <li>
                                        <Link to="dashboard.html"><img src="images/icon/15.png" alt="" /> My Account</Link>
                                    </li>
                                    <li>
                                        <Link to="db-profile.html"><img src="images/icon/2.png" alt="" /> My Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="db-booking.html"><img src="images/icon/16.png" alt="" /> My Bookings</Link>
                                    </li>
                                    <li>
                                        <Link to="db-event.html"><img src="images/icon/17.png" alt="" /> My Events</Link>
                                    </li>
                                    <li>
                                        <Link to="db-activity.html"><img src="images/icon/14.png" alt="" /> My Activity</Link>
                                    </li>
                                    <li>
                                        <Link to="#!" data-toggle="modal" data-target="#modal2"><img src="images/icon/5.png" alt="" /> Register</Link>
                                    </li>
                                    <li>
                                        <Link to="#!" data-toggle="modal" data-target="#modal1"><img src="images/icon/6.png" alt="" /> Log In</Link>
                                    </li>
                                    <li>
                                        <Link to="#!" data-toggle="modal" data-target="#modal3"><img src="images/icon/13.png" alt="" /> Forgot Password</Link>
                                    </li>
                                </ul>
                                <ul id='drop-home' className='dropdown-content drop-con-man'>
                                    <li><Link to="main.html">Home - Default</Link>
                                    </li>
                                    <li><Link to="index-1.html">Home - Reservation</Link>
                                    </li>
                                    <li><Link to="index-2.html">Home - FullSlider</Link>
                                    </li>
                                    <li><Link to="index-3.html">Home - Block Color</Link>
                                    </li>
                                </ul>
                                <ul id='dropdown2' className='dropdown-content drop-con-man'>
                                    <li><Link to="#!">English</Link>
                                    </li>
                                    <li><Link to="#!">Spanish</Link>
                                    </li>
                                    <li><Link to="#!">Hindi</Link>
                                    </li>
                                    <li><Link to="#!">Russian</Link>
                                    </li>
                                    <li><Link to="#!">Portuguese</Link>
                                    </li>
                                </ul>
                                <ul id='drop-room' className='dropdown-content drop-con-man'>
                                    <li><Link to="all-rooms.html">All Suite Rooms</Link>
                                    </li>
                                    <li><Link to="room-details.html">Room Details</Link>
                                    </li>
                                    <li><Link to="room-details-block.html">Room Details Block</Link>
                                    </li>
                                    <li><Link to="room-details-1.html">Room Parallax</Link>
                                    </li>
                                </ul>
                                <div id='drop-page' className='dropdown-content drop-con-man drop-full'>
                                    <div className="mm-1">
                                        <h4>Pages</h4>
                                        <ul>
                                            <li><Link to="room-details.html">Room Details - 1</Link>
                                            </li>
                                            <li><Link to="room-details-1.html">Room Details - 2</Link>
                                            </li>
                                            <li><Link to="room-details-block.html">Room Details - 3</Link>
                                            </li>
                                            <li><Link to="all-rooms.html">All Rooms</Link>
                                            </li>
                                            <li><Link to="all-rooms1.html">All Rooms - 1</Link>
                                            </li>
                                            <li><Link to="aminities.html">Aminities</Link>
                                            </li>
                                            <li><Link to="aminities1.html">Aminities - 1</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mm-1">
                                        <h4>Pages</h4>
                                        <ul>
                                            <li><Link to="dashboard.html">User Dashboard</Link>
                                            </li>
                                            <li><Link to="db-activity.html">DB Activity</Link>
                                            </li>
                                            <li><Link to="db-booking.html">DB-Booking</Link>
                                            </li>
                                            <li><Link to="db-event.html">DB-Event</Link>
                                            </li>
                                            <li><Link to="db-new-booking.html">DB New Booking</Link>
                                            </li>
                                            <li><Link to="booking.html">Booking</Link>
                                            </li>
                                            <li><Link to="contact-us.html">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mm-1">
                                        <h4>Pages</h4>
                                        <ul>
                                            <li><Link to="blog.html">Blog</Link>
                                            </li>
                                            <li><Link to="blog-inner.html">Blog Inner</Link>
                                            </li>
                                            <li><Link to="events.html">Events</Link>
                                            </li>
                                            <li><Link to="gallery.html">Gallery</Link>
                                            </li>
                                            <li><Link to="gallery1.html">Gallery - 1</Link>
                                            </li>
                                            <li><Link to="gallery2.html">Gallery - 2</Link>
                                            </li>
                                            <li><Link to="collapsible.html">Collapsible</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mm-1">
                                        <h4>Pages</h4>
                                        <ul>
                                            <li><Link to="about-us.html">About Us</Link>
                                            </li>
                                            <li><Link to="services.html">Services</Link>
                                            </li>
                                            <li><Link to="services1.html">Services - 1</Link>
                                            </li>
                                            <li><Link to="typho-grid.html">Grid Layout</Link>
                                            </li>
                                            <li><Link to="typo-alert.html">Alert Messages</Link>
                                            </li>
                                            <li><Link to="form-fields.html">Form Fields</Link>
                                            </li>
                                            <li><Link to="menu.html">Food Menu</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mm-1">
                                        <h4>Pages</h4>
                                        <ul>
                                            <li><Link to="typo-all-head.html">All Headers</Link>
                                            </li>
                                            <li><Link to="typo-badges-labels.html">Labels</Link>
                                            </li>
                                            <li><Link to="typo-buttons.html">Buttons</Link>
                                            </li>
                                            <li><Link to="typo-pagination.html">Pagination</Link>
                                            </li>
                                            <li><Link to="typo-progressbar.html">Progressbar</Link>
                                            </li>
                                            <li><Link to="preloading.html">Preloading</Link>
                                            </li>
                                            <li><Link to="menu1.html">Food Menu - 1</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mm-1">
                                        <h4>Pages</h4>
                                        <ul>
                                            <li><Link to="typo-slider.html">Image Sliders</Link>
                                            </li>
                                            <li><Link to="typo-table.html">Table</Link>
                                            </li>
                                            <li><Link to="typo-buttons.html">Buttons</Link>
                                            </li>
                                            <li><Link to="typo-pagination.html">Pagination</Link>
                                            </li>
                                            <li><Link to="typo-progressbar.html">Progressbar</Link>
                                            </li>
                                            <li><Link to="sitemap.html">Sitemap</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="logo">
                                <Link to="main.html"><img src="images/logo.png" alt="" />
                                </Link>
                            </div>
                            <div className="menu-bar">
                                <ul>
                                    <li><Link to="#!" className='dropdown-button' data-activates='drop-home'>Home <i className="fa fa-angle-down"></i></Link>
                                    </li>
                                    <li><Link to="#!" className='dropdown-button' data-activates='drop-room'>Rooms <i className="fa fa-angle-down"></i></Link>
                                    </li>
                                    <li><Link to="services.html">Services</Link>
                                    </li>
                                    <li><Link to="menu.html">Menu</Link>
                                    </li>
                                    <li><Link to="events.html">Events</Link>
                                    </li>
                                    <li><Link to="aminities1.html">Amenities</Link>
                                    </li>
                                    <li><Link to="#!" className='dropdown-button' data-activates='drop-page'>Pages <i className="fa fa-angle-down"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
