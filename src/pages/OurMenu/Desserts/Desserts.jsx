import { useEffect, useState } from "react";
import MenuCover from "../../../componets/MenuCover/MenuCover";
import "./Desserts.css";
import FoodList from "../../../componets/FoodList/FoodList";
import FavButton from "../../../componets/FavButton/FavButton";

const Desserts = () => {
  const title = "DESSERTS";
  const about = ` Lorem Ipsum has been the industry’s standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book.`;
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("../../../../public/topMenu.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const aboutStyle = { fontSize: "12px", width: "450px" };
  return (
    <div className="dessert_section">
      <div className="dessert_img_container">
        <MenuCover
          title={title}
          about={about}
          aboutStyle={aboutStyle}
        ></MenuCover>
      </div>
      <div className="dessert_menu_list">
        {foods.map((food, index) => (
          <FoodList key={index} food={food}></FoodList>
        ))}
      </div>
      <FavButton></FavButton>
    </div>
  );
};

export default Desserts;
