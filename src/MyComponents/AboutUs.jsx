import React, { useState } from 'react';

function AboutUs() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const feedback = (e) =>{
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="rows">
                <div className="col-md-8">
                    <br /><br /><br /><br />
                    <h1>About Us</h1>
                    <p>Online review of Restaurant is getting easier as mobile and internet technology progresses. Restaurant lovers now tend to find their favorite cuisine through online restaurant review system as it is easier and fast. QSR Web found that digital restaurant ordering is growing 300 percent faster than dine-in traffic. But most of the restaurant do not give concentration to make solid appearance on  the  internet.  </p>
                    <p>There  are  also  some  problems  of  traditional  Restaurant review and searching of famous Restaurant location system.</p>
                    <p>Customer lacks the copy of available menu items in restaurant. </p>
                    <p>To solve these issues, an Online Restaurant Review System has been developed which is originally  designed for  small scale  business. But this system  is  applicable in  any restaurant. The main advantage of this online system is that it greatly simplifies the Restaurant review, feedback and online rating process for  both of the  customer and  the restaurant.
                    </p>
                    <p>On the other hand, social websites and media play a vital role for business. Every business can use social media to get information about potential customers, analyze sentiments and better relationship with customers. Today, a recommendation from friends via social media plays as a word of mouth in building trust while ordering online. Hence, Social media can be integrated to restaurant website  to ensure  customers about the Restaurant quality. New customers can choice their desired products by studying reviews made by other users.</p>
                    <p>The website will also help the management to manage the online feedback, review, category, specialty of the restaurant, location and view the status. The management can add menus with the system. </p>
                    <p>Online Website Reviews today have the power to connect the potential consumer directly with a restaurant even before he/she walks through the doors of a restaurant. Moreover, the popularity of online review websites’ have increased in recent years and thus more reviews has been created for a variety of products and services. </p>
                    <p>Online users can read and write restaurant reviews. In order to leave a review, users must rate any restaurant 1 to 5 stars, and the number of the average rating is presented</p>
                    <p>This Online review website displayed the restaurant aspects (e.g., Restaurant quality, service quality, and environment), and the restaurant consumers perceive the quality of a restaurant by reading these online reviews. Some scholars examine the restaurant attributes by analyzing online perspective. Additionally, the restaurant aspects are listed in the study from most frequent to the least.</p>
                </div>
                <div className="col-md-4">
                    <div className="visible-md visible-lg">
                        <br /><br /><br /><br /><br /><br /><br />
                    </div><br />
                    <div className="head-typo typo-com collap-expand">
                        <h1>Contact Us</h1>
                        <span>Phone no: <a href="tel: +91 8839483954">+91-8839483954</a></span><br />
                        <span>Email: <a href="mailto: anuragchakraborty735@gmail.com">support@therestogo.com</a></span>
                        <form onSubmit={feedback}>				
                            <div className="input-field col s12">
								<input value={name} onChange={ (e) => {setName(e.target.value)} } type="text" className="validate" />
								<label>First Name</label>
							</div>
							<div className="input-field col s12">
								<textarea value={text} onChange={ (e) => {setText(e.target.value)} } className="materialize-textarea"></textarea>
								<label>Feedback</label>
							</div>
                            <button className="btn btn-custom">send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
