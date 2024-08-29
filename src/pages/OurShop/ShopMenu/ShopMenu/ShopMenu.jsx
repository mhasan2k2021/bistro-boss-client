import { useContext, useEffect, useState } from "react";
import "./ShopMenu.css";
import { ShopMenuContext } from "../../../../assets/context/ShopMenuContext";

const ShopMenu = () => {
  const { setCategory } = useContext(ShopMenuContext);
  // this state for define is it active or not

  const [isActive, setActive] = useState(0);

  const shopMenuList = [
    "popular",
    "salad",
    "pizza",
    "soup",
    "dessert",
    "offered",
  ];

  const handleListMenu = (item, ind) => {
    setCategory(item);
    setActive(ind);
  };

  return (
    <div className="shop_menu_section">
      <ul>
        {shopMenuList.map((item, ind) => (
          <li
            className={`${isActive === ind ? "active" : ""}`}
            key={ind}
            onClick={() => handleListMenu(item, ind)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopMenu;
