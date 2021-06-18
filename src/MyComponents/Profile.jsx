import React from "react";

function Profile({user}) {
  return (
    <>
      <div className="db-profile">
        
        <img src={user.photoURL} alt="user photo" />
        <h4>{user.displayName}</h4>
        <p>
          28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark :
          Next To Airport
        </p>
      </div>
      <div className="db-profile-view">
        <table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Profile Completion</th>
              <th>Join Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>32</td>
              <td>90%</td>
              <td>May 2010</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="db-profile-edit">
        <form className="col s12 ng-pristine ng-valid">
          <div>
            <label className="col s4">Full Name</label>
            <div className="input-field col s8">
              <input type="text" value="Jana Novakova" className="validate" />
            </div>
          </div>
          <div>
            <label className="col s4">Email id</label>
            <div className="input-field col s8">
              <input
                type="email"
                value="jana-novakova@gmail.com"
                className="validate"
              />
            </div>
          </div>
          <div>
            <label className="col s4">Phone</label>
            <div className="input-field col s8">
              <input type="number" value="0185419635" className="validate" />
            </div>
          </div>
          <div>
            <label className="col s4">Age</label>
            <div className="input-field col s8">
              <input type="number" value="34" className="validate" />
            </div>
          </div>
          <div>
            <div className="file-field input-field">
              <div className="btn" id="pro-file-upload">
                
                <span>File</span>
                <input type="file" />
              </div>
              <div className="file-path-wrapper">
                <input
                  className="file-path validate"
                  type="text"
                  placeholder="Upload profile picture"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="col s4">Address Line 1</label>
            <div className="input-field col s8">
              <input
                type="text"
                value="28800 Orchard Lake Road"
                className="validate"
              />
            </div>
          </div>
          <div>
            <label className="col s4">Address Line 2</label>
            <div className="input-field col s8">
              <input
                type="text"
                value="Suite 180 Farmington Hills, U.S.A"
                className="validate"
              />
            </div>
          </div>
          <div>
            <div className="input-field col s8">
              <i className="waves-effect waves-light pro-sub-btn waves-input-wrapper">
                <input
                  type="submit"
                  value="Submit"
                  className="waves-button-input"
                  id="pro-sub-btn"
                />
              </i>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
