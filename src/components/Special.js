import React from "react";

const Special = ({imageUrl,name,price,description,isDelevred}) => {
   
  return (
    <div className="menu-item">
      <img src={imageUrl} alt="product" />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">${price}</span>
      </div>
      <p>
       {description}
      </p>
      <a href="#order_delevery">{isDelevred && "Order a delevry"}</a>
    </div>
  );
};

export default Special;
