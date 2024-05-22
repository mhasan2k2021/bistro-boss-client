import { useEffect, useState } from "react";
import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./Recommends.css";
import FoodList from "./FoodList/FoodList";

const Recommends = () => {
  const [recommendFood, setRecommendFood] = useState([]);
  useEffect(() => {
    fetch("../../../../public/recommend.json")
      .then((res) => res.json())
      .then((data) => setRecommendFood(data));
  }, []);
  return (
    <div className="recommend_container">
      <ShortHeading shortHading="---Should Try---"></ShortHeading>
      <Heading heading="CHEF RECOMMENDS"></Heading>
      <div className="recommend_food_container">
        {recommendFood.map((food) => (
          <FoodList key={food.name} food={food}></FoodList>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
