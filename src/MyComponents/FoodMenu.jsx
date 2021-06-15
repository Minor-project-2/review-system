import React from 'react';

function FoodMenu({data}) {
    return (
        <div className="res-menu"> <img src={`${data.image_url}`} alt="" />
            <h3>{data.name} <span>{`${data.price_full}`}</span></h3>
            <span className="menu-item">{data.price_half}</span> 
        </div>
    );
}

export default FoodMenu;