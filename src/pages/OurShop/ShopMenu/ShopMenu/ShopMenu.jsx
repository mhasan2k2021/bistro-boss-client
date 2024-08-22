import { useContext, useEffect } from "react";
import "./ShopMenu.css";
import { ShopMenuContext } from "../../../../assets/context/ShopMenuContext";

const ShopMenu = () => {
  const { setCategory } = useContext(ShopMenuContext);

  const shopMenuList = [
    "popular",
    "salad",
    "pizza",
    "soup",
    "dessert",
    "offered",
  ];

  const handleListMenu = (item) => {
    setCategory(item);
  };

  return (
    <div className="shop_menu_section">
      <ul>
        {shopMenuList.map((item, ind) => (
          <li key={ind} onClick={() => handleListMenu(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopMenu;
