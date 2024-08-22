import "./ShopMenu.css";

const ShopMenu = () => {
  const shopMenuList = ["salad", "pizza", "soups", "desserts", "drinks"];

  const handleListMenu = (item) => {
    console.log(item);
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
