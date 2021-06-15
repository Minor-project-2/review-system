import React, {useState} from "react";

function ReviewForm() {

	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(0);

	const handleSubmit = (e)=>{
		e.preventDefault();
		console.log(comment);
		setComment("")

	}

  return (
    <div
      id="commend"
      className="modal fade in"
      role="dialog"
      
    >
      <div className="log-in-pop">
        <div className="log-in-pop-right">
          <a href="#" className="pop-close" data-dismiss="modal">
            <img src="images/cancel.png" alt="" />
          </a>
          <h4>Write Your Review</h4>
          <p>
           Let us know about your exiciting experience
          </p>
          <form className="s12 ng-pristine ng-valid" id="ratingsForm">
         
            <div>
              <div className="input-field s12">
                <textarea value={comment} onChange={(e)=>setComment(e.target.value)} className="materialize-textarea"></textarea>
                <label>Type your comments</label>
              </div>
            </div>
            <div className="stars">
				<div>
              <input  type="radio" name="star" className="star-1" id="star-1" />
              <label className="star-1" for="star-1">
                1
              </label>
			  </div>
              <input  type="radio" name="star" className="star-2" id="star-2" />
              <label className="star-2" for="star-2">
                2
              </label>
              <input type="radio" name="star" className="star-3" id="star-3" />
              <label className="star-3" for="star-3">
                3
              </label>
              <input type="radio" name="star" className="star-4" id="star-4" />
              <label className="star-4" for="star-4">
                4
              </label>
              <input type="radio" name="star" className="star-5" id="star-5" />
              <label className="star-5" for="star-5">
                5
              </label>
              <span></span>
            </div>
            <div>
              <div className="input-field s4">
                <i
                  className="waves-effect waves-light log-in-btn waves-input-wrapper"
                  
                >
                 <div onClick={handleSubmit}> <input
                    type="submit"
                    value="Submit Your Review"
                    className="waves-button-input"
                  /></div>
                </i>
              </div>
            </div>
            <div>
              <div className="input-field s12">
                
                <a
                  href="#"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#modal1"
                >
                  Are you a already member ? Login
                </a>
              </div>
            </div>
          </form>
          <div>
            <div> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;
