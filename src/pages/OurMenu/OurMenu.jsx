import Desserts from "./Desserts/Desserts";
import OurMenuCover from "./OurMenuCover/OurMenuCover";
import TodayOffer from "./TodayOffer/TodayOffer";

const OurMenu = () => {
  return (
    <div>
      <OurMenuCover></OurMenuCover>
      <TodayOffer></TodayOffer>
      <Desserts></Desserts>
    </div>
  );
};

export default OurMenu;
