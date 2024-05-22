import { useEffect, useState } from "react";
import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./FromOurMenu.css";
import OneMenu from "./OneMenu/OneMenu";

const FromOurMenu = () => {
  const [menu, setMenu] = useState([]);
  //   this state for useEffect work until this data load
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch("../../../../public/topMenu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div className="from_our_menu">
      <ShortHeading shortHading="---Check it out---"></ShortHeading>
      <Heading heading="FROM OUR MENU" className="menu_heading"></Heading>
      <div className="top-menu">
        {menu.map((m) => (
          <OneMenu key={m.name} m={m}></OneMenu>
        ))}
      </div>
    </div>
  );
};

export default FromOurMenu;
