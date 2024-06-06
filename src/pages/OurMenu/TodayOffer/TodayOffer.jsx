import { useEffect, useState } from "react";
import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./TodayOffer.css";
import FoodList from "../../../componets/FoodList/FoodList";

const TodayOffer = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("../../../../public/topMenu.json")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  return (
    <div className="TodayOffer">
      <ShortHeading shortHading="---Don't miss---"></ShortHeading>
      <Heading heading="TODAY'S OFFER"></Heading>
      <div className="offer_container">
        {foods.map((food, index) => (
          <FoodList key={index} food={food}></FoodList>
        ))}
      </div>
      <button>ORDER YOUR FAVORITE FOOD</button>
    </div>
  );
};

export default TodayOffer;
