import React, { useState, useEffect } from "react";
import RstLstItem from "./RstLstItem";
import firebase from "../firebase";

function RstLst({ query }) {
  const db = firebase.firestore();
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const response = db
      .collection("restaurants")
      .where("name", ">=", query)
      .where("name", "<=", query + "z");
    const data = await response.limit(6).get();
    try {
      const newData = data.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setRestaurants(newData);
    } catch {
      console.log("Unable to get restaurants");
    }
    // console.log(restaurants);
  };
  useEffect(() => {
    fetchRestaurants();
  }, [query]);
  return (
    <div className="inn-body-section pad-bot-55">
      <div className="container">
        <div className="row">
          <div className="page-head">
            <h2>Search Result</h2>
            <div className="head-title">
              <div className="hl-1"></div>
              <div className="hl-2"></div>
              <div className="hl-3"></div>
            </div>
            <p>You Searched for {`"${query}"`}</p>
          </div>
          {restaurants.length
            ? restaurants.map((restaurant) => (
                <RstLstItem key={restaurant.id} rest={restaurant} />
              ))
            : "no restaurants"}
        </div>
      </div>
    </div>
  );
}

export default RstLst;
