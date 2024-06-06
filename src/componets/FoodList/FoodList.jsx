import React from "react";

const FoodList = ({ food }) => {
  const { image, name, price, detail } = food;
  return (
    <div className="oneMenu">
      <img src={image} alt="" />
      <div className="food_detail">
        <div className="name_price">
          <h6>
            {name} <span className="menu_dash">------------------</span>
          </h6>
          <p>${price}</p>
        </div>
        {detail.length > 50 ? (
          <p className="detail">{detail.slice(0, 80)}...</p>
        ) : (
          <p className="detail">{details}</p>
        )}
      </div>
    </div>
  );
};

export default FoodList;
