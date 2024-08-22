import OurShopImage from "./OurShopImage/OurShopImage";
import Products from "./Products/Products";
import ProductsContainer from "./ShopMenu/ProductsContainer/ProductsContainer";
import ShopMenu from "./ShopMenu/ShopMenu/ShopMenu";

const OurShop = () => {
  return (
    <div>
      <OurShopImage></OurShopImage>
      <ShopMenu></ShopMenu>
      <ProductsContainer></ProductsContainer>
    </div>
  );
};

export default OurShop;
