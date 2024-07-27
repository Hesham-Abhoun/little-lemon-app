import React from "react";
import rate from "../assets/rate.jpg"
const CustomersSay = ({ imageUrl, name, comment,rating,id}) => {
  let i=0;

  const rates=()=>{
    let stars=[];
    while (i< rating) {
     stars.push("x");
      i++;
    }
    return stars;
  }
    
  return (
    <div className="review-item">
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
      <p>{comment}</p>
      <div className="rates">
      {
          rates().map(()=><img src={rate} className="star-rate" alt="rating"/>)
     }
      </div>
    
      
     
    </div>
  );
};

export default CustomersSay;
