import Desserts from "./Desserts/Desserts";
import OurMenuCover from "./OurMenuCover/OurMenuCover";
import Pizza from "./Pizza/Pizza";
import TodayOffer from "./TodayOffer/TodayOffer";

const OurMenu = () => {
  return (
    <div>
      <OurMenuCover></OurMenuCover>
      <TodayOffer></TodayOffer>
      <Desserts></Desserts>
      <Pizza></Pizza>
    </div>
  );
};

export default OurMenu;
