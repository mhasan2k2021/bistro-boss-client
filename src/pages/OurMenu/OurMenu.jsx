import { useEffect } from "react";
import Desserts from "./Desserts/Desserts";
import OurMenuCover from "./OurMenuCover/OurMenuCover";
import Pizza from "./Pizza/Pizza";
import TodayOffer from "./TodayOffer/TodayOffer";

const OurMenu = () => {
  // add dynamic title
  useEffect(() => {
    document.title = "Our Menu | Find our favorite dish";
  }, []);
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
