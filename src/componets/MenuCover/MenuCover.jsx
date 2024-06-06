import "./MenuCover.css";

const MenuCover = ({ title, about }) => {
  return (
    <div className="menu_cover">
      <h3>{title}</h3>
      <p>{about}</p>
    </div>
  );
};

export default MenuCover;
