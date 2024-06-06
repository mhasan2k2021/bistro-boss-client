import "./MenuCover.css";

const MenuCover = ({ title, about, aboutStyle, titleStyle }) => {
  return (
    <div className="menu_cover">
      <h3 style={titleStyle}>{title}</h3>
      <p style={aboutStyle}>{about}</p>
    </div>
  );
};

export default MenuCover;
