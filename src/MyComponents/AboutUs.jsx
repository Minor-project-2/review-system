import React, { useState } from 'react';
// import { Link } from "react-router-dom";

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
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque expedita obcaecati, quis adipisci velit voluptatum, aliquam tenetur optio deserunt ab perferendis suscipit itaque quo nisi alias enim quisquam, corporis quos!
                    Ad dolor quam error ducimus officiis autem eum vero eaque aperiam accusantium, est numquam aut qui debitis soluta, exercitationem aliquid repellendus reprehenderit dicta unde saepe enim. Distinctio ducimus repellendus cumque?
                    Eum ipsam aliquam voluptate id iusto corrupti tempora, nobis corporis qui earum eaque alias quod, explicabo incidunt, facilis cupiditate enim. Reprehenderit alias officia natus inventore voluptas nisi architecto ab recusandae!
                    Fuga, voluptatum officiis? Ullam eligendi asperiores eveniet error ea nam, fuga ratione blanditiis earum natus? Ducimus soluta, minima iusto ex quas dolores, tempora enim doloremque maxime, inventore ipsam et explicabo?
                    Nisi maiores fugiat facilis libero. Quas, dolores maiores velit laudantium nobis alias corrupti modi provident odit debitis iure, odio inventore at sequi fugit beatae praesentium atque aut sed numquam dicta?</p>
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
