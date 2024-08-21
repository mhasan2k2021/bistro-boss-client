import { Link } from "react-router-dom";
import "./ShopMenu.css";

const ShopMenu = () => {
  return (
    <div className="shop_menu_section">
      <ul>
        <li>Salad</li>
        <li>pizza</li>
        <li>soups</li>
        <li>desserts</li>
        <li>drinks</li>
      </ul>
    </div>
  );
};

export default ShopMenu;
