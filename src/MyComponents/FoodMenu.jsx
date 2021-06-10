import React from 'react';

function FoodMenu(props) {
    return (
        <div className="res-menu"> <img src="images/menu/1.jpg" alt="" />
            <h3>{props.data.title} <span>{props.data.price}</span></h3>
            <span className="menu-item">{props.data.desc}</span> 
        </div>
    );
}

export default FoodMenu