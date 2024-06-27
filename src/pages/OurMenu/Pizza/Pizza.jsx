import MenuCover from "../../../componets/MenuCover/MenuCover";
import "./Pizza.css";
import { useEffect, useState } from "react";
import FavButton from "../../../componets/FavButton/FavButton";
import FoodList from "../../../componets/FoodList/FoodList";

const Pizza = () => {
  const about = `Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("../../../../public/topMenu.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="pizza_section">
      <div className="pizza_cover">
        <MenuCover title="PIZZA" about={about}></MenuCover>
      </div>

      <div className="food_list">
        {foods.map((food, index) => (
          <FoodList key={index} food={food}></FoodList>
        ))}
      </div>
      <FavButton></FavButton>
    </div>
  );
};

export default Pizza;
