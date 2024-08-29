import React from "react";
import "./Thumbnail.css";
import MenuCover from "../../../componets/MenuCover/MenuCover";

const Thumbnail = () => {
  return (
    <div className="thumbnail_section">
      <MenuCover
        title="CONTACT US"
        about="Would you like to try a dish?"
      ></MenuCover>
    </div>
  );
};

export default Thumbnail;
