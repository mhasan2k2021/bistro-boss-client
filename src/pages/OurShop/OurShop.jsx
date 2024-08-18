import { Outlet } from "react-router-dom";
import OurShopImage from "./OurShopImage/OurShopImage";
import ShopMenu from "./ShopMenu/ShopMenu";

const OurShop = () => {
  return (
    <div>
      <OurShopImage></OurShopImage>
      <ShopMenu></ShopMenu>
      <Outlet></Outlet>
    </div>
  );
};

export default OurShop;
