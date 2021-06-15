import React from "react";
import firebase, {auth} from "../firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

const guestUser = {};
guestUser.displayName = "Guest";
guestUser.photoURL = "logo.svg";
guestUser.isGuest = true;

function Signin({ setUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(guestUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div id="modal1" className="modal fade in" role="dialog">
      <div className="log-in-pop">
        <div className="log-in-pop-left">
          <Link to="#" className="pop-close" data-dismiss="modal">
            <img src="images/cancel.png" alt="" />
          </Link>
          <h1>
            Hello... <span className="ng-binding"></span>
          </h1>
          <h4>Login/Register with social media</h4>
          <ul>
            <li></li>
            <li className="">
              <Link onClick={login} data-dismiss="modal">
                <i className="fa fa-google"></i> Google
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Signin;
